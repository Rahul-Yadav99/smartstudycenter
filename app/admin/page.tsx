'use client'

import { useEffect, useState } from 'react'
import { Trash2, Loader2, CheckCircle, XCircle, BookOpen, Video as VideoIcon, Plus, LayoutDashboard } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Subject = { _id: string; name: string; createdAt: string }
type Video   = { _id: string; title: string; url: string; subject: string }

// ─── Toast ────────────────────────────────────────────────────────────────────

type Toast = { id: number; message: string; type: 'success' | 'error' }

const useToast = () => {
    const [toasts, setToasts] = useState<Toast[]>([])
    const show = (message: string, type: 'success' | 'error') => {
        const id = Date.now()
        setToasts(prev => [...prev, { id, message, type }])
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3500)
    }
    return { toasts, show }
}

// ─── Confirm Modal ────────────────────────────────────────────────────────────

const ConfirmModal = ({
    message,
    onConfirm,
    onCancel,
}: { message: string; onConfirm: () => void; onCancel: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
            <h3 className="text-base font-semibold text-gray-800 mb-2">Confirm Delete</h3>
            <p className="text-sm text-gray-500 mb-6">{message}</p>
            <div className="flex gap-3 justify-end">
                <button
                    onClick={onCancel}
                    className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
                >
                    Cancel
                </button>
                <button
                    onClick={onConfirm}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition"
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
)

// ─── Subjects Panel ───────────────────────────────────────────────────────────

const SubjectsPanel = ({ showToast }: { showToast: (m: string, t: 'success' | 'error') => void }) => {
    const [subjects, setSubjects]   = useState<Subject[]>([])
    const [loading, setLoading]     = useState(false)
    const [name, setName]           = useState('')
    const [creating, setCreating]   = useState(false)
    const [deleteTarget, setDeleteTarget] = useState<Subject | null>(null)
    const [deleting, setDeleting]   = useState(false)

    const load = async () => {
        setLoading(true)
        try {
            const res  = await fetch('http://localhost:5000/api/subjects')
            const data = await res.json()
            setSubjects(data.subjects ?? [])
        } catch { showToast('Failed to load subjects', 'error') }
        finally  { setLoading(false) }
    }

    useEffect(() => { load() }, [])

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!name.trim()) return
        setCreating(true)
        try {
            const res  = await fetch('http://localhost:5000/api/subjects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name.trim() }),
            })
            const data = await res.json()
            if (!res.ok) { showToast(data.error ?? 'Failed to create', 'error'); return }
            showToast('Subject created!', 'success')
            setName('')
            load()
        } catch { showToast('Network error', 'error') }
        finally  { setCreating(false) }
    }

    const handleDelete = async () => {
        if (!deleteTarget) return
        setDeleting(true)
        try {
            const res  = await fetch(`http://localhost:5000/api/subjects/${deleteTarget._id}`, { method: 'DELETE' })
            const data = await res.json()
            if (!res.ok) { showToast(data.error ?? 'Failed to delete', 'error'); return }
            showToast('Subject deleted!', 'success')
            load()
        } catch { showToast('Network error', 'error') }
        finally  { setDeleting(false); setDeleteTarget(null) }
    }

    return (
        <div>
            {deleteTarget && (
                <ConfirmModal
                    message={`Are you sure you want to delete "${deleteTarget.name}"?`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                />
            )}

            {/* Create form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Add New Subject</h2>
                <form onSubmit={handleCreate} className="flex gap-3">
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. Mathematics"
                        className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1A56DB]/30 focus:border-[#1A56DB] transition"
                    />
                    <button
                        type="submit"
                        disabled={creating || !name.trim()}
                        className="flex items-center gap-2 bg-[#1A56DB] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#1648c0] disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                        {creating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                        Add Subject
                    </button>
                </form>
            </div>

            {/* List */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">All Subjects</h2>
                    <span className="text-xs bg-[#E6EEFF] text-[#1A56DB] font-semibold px-2.5 py-1 rounded-full">{subjects.length}</span>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-16 text-gray-400">
                        <Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading…
                    </div>
                ) : subjects.length === 0 ? (
                    <div className="py-16 text-center text-gray-400 text-sm">No subjects yet. Create one above.</div>
                ) : (
                    <ul className="divide-y divide-gray-50">
                        {subjects.map(sub => (
                            <li key={sub._id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50/60 transition">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#E6EEFF] flex items-center justify-center">
                                        <BookOpen className="w-4 h-4 text-[#1A56DB]" />
                                    </span>
                                    <span className="text-sm font-medium text-gray-800 capitalize">{sub.name}</span>
                                </div>
                                <button
                                    onClick={() => setDeleteTarget(sub)}
                                    className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition"
                                    title="Delete subject"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

// ─── Videos Panel ─────────────────────────────────────────────────────────────

const VideosPanel = ({ showToast }: { showToast: (m: string, t: 'success' | 'error') => void }) => {
    const [videos, setVideos]         = useState<Video[]>([])
    const [subjects, setSubjects]     = useState<Subject[]>([])
    const [loading, setLoading]       = useState(false)
    const [form, setForm]             = useState({ title: '', url: '', subject: '' })
    const [creating, setCreating]     = useState(false)
    const [deleteTarget, setDeleteTarget] = useState<Video | null>(null)
    const [deleting, setDeleting]     = useState(false)

    const loadVideos = async () => {
        setLoading(true)
        try {
            const res  = await fetch('http://localhost:5000/api/videos')
            const data = await res.json()
            setVideos(data.videos ?? [])
        } catch { showToast('Failed to load videos', 'error') }
        finally  { setLoading(false) }
    }

    const loadSubjects = async () => {
        try {
            const res  = await fetch('http://localhost:5000/api/subjects')
            const data = await res.json()
            setSubjects(data.subjects ?? [])
        } catch {}
    }

    useEffect(() => { loadVideos(); loadSubjects() }, [])

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!form.title.trim() || !form.url.trim() || !form.subject) return
        setCreating(true)
        try {
            const res  = await fetch('http://localhost:5000/api/videos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            const data = await res.json()
            if (!res.ok) { showToast(data.error ?? 'Failed to create', 'error'); return }
            showToast('Video added!', 'success')
            setForm({ title: '', url: '', subject: '' })
            loadVideos()
        } catch { showToast('Network error', 'error') }
        finally  { setCreating(false) }
    }

    const handleDelete = async () => {
        if (!deleteTarget) return
        setDeleting(true)
        try {
            const res  = await fetch(`http://localhost:5000/api/videos/${deleteTarget._id}`, { method: 'DELETE' })
            const data = await res.json()
            if (!res.ok) { showToast(data.error ?? 'Failed to delete', 'error'); return }
            showToast('Video deleted!', 'success')
            loadVideos()
        } catch { showToast('Network error', 'error') }
        finally  { setDeleting(false); setDeleteTarget(null) }
    }

    return (
        <div>
            {deleteTarget && (
                <ConfirmModal
                    message={`Are you sure you want to delete "${deleteTarget.title}"?`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                />
            )}

            {/* Create form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Add New Video</h2>
                <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                        type="text"
                        value={form.title}
                        onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                        placeholder="Video title"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1A56DB]/30 focus:border-[#1A56DB] transition"
                    />
                    <input
                        type="text"
                        value={form.url}
                        onChange={e => setForm(f => ({ ...f, url: e.target.value }))}
                        placeholder="YouTube URL or video ID"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1A56DB]/30 focus:border-[#1A56DB] transition"
                    />
                    <div className="flex gap-3">
                        <select
                            value={form.subject}
                            onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                            className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1A56DB]/30 focus:border-[#1A56DB] transition bg-white text-gray-700"
                        >
                            <option value="">Select subject</option>
                            {subjects.map(s => (
                                <option key={s._id} value={s.name}>{s.name}</option>
                            ))}
                        </select>
                        <button
                            type="submit"
                            disabled={creating || !form.title.trim() || !form.url.trim() || !form.subject}
                            className="flex items-center gap-2 bg-[#1A56DB] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#1648c0] disabled:opacity-50 disabled:cursor-not-allowed transition whitespace-nowrap"
                        >
                            {creating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                            Add Video
                        </button>
                    </div>
                </form>
            </div>

            {/* List */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">All Videos</h2>
                    <span className="text-xs bg-[#E6EEFF] text-[#1A56DB] font-semibold px-2.5 py-1 rounded-full">{videos.length}</span>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-16 text-gray-400">
                        <Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading…
                    </div>
                ) : videos.length === 0 ? (
                    <div className="py-16 text-center text-gray-400 text-sm">No videos yet. Add one above.</div>
                ) : (
                    <ul className="divide-y divide-gray-50">
                        {videos.map(video => (
                            <li key={video._id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50/60 transition gap-4">
                                <div className="flex items-center gap-3 min-w-0">
                                    {/* Thumbnail */}
                                    <img
                                        src={`https://img.youtube.com/vi/${video.url}/default.jpg`}
                                        alt={video.title}
                                        className="w-16 h-10 rounded-lg object-cover flex-shrink-0 bg-gray-100"
                                    />
                                    <div className="min-w-0">
                                        <p className="text-sm font-medium text-gray-800 truncate">{video.title}</p>
                                        <span className="inline-block mt-0.5 text-xs bg-[#E6EEFF] text-[#1A56DB] px-2 py-0.5 rounded-full capitalize">{video.subject}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setDeleteTarget(video)}
                                    className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition flex-shrink-0"
                                    title="Delete video"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type Tab = 'subjects' | 'videos'

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'subjects', label: 'Subjects', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'videos',   label: 'Videos',   icon: <VideoIcon className="w-4 h-4" /> },
]

export default function AdminPage() {
    const [tab, setTab]   = useState<Tab>('subjects')
    const { toasts, show: showToast } = useToast()

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Sidebar */}
            <div className="flex">
                <aside className="w-64 min-h-screen bg-white border-r border-gray-100 shadow-sm hidden md:flex flex-col">
                    {/* Logo */}
                    <div className="px-6 py-5 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[#1A56DB] flex items-center justify-center">
                                <LayoutDashboard className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#0D1C2E] leading-none">Admin Panel</p>
                                <p className="text-[10px] text-gray-400 mt-0.5">Smart Study Center</p>
                            </div>
                        </div>
                    </div>

                    {/* Nav */}
                    <nav className="flex-1 px-3 py-4 space-y-1">
                        {TABS.map(t => (
                            <button
                                key={t.id}
                                onClick={() => setTab(t.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                                    tab === t.id
                                        ? 'bg-[#E6EEFF] text-[#1A56DB]'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                                }`}
                            >
                                {t.icon}
                                {t.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main */}
                <main className="flex-1 p-6 md:p-8">
                    {/* Mobile tab bar */}
                    <div className="flex md:hidden gap-2 mb-6">
                        {TABS.map(t => (
                            <button
                                key={t.id}
                                onClick={() => setTab(t.id)}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition ${
                                    tab === t.id
                                        ? 'bg-[#1A56DB] text-white'
                                        : 'bg-white text-gray-500 border border-gray-200'
                                }`}
                            >
                                {t.icon}
                                {t.label}
                            </button>
                        ))}
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-[#0D1C2E]">
                            {tab === 'subjects' ? 'Subjects' : 'Videos'}
                        </h1>
                        <p className="text-sm text-gray-400 mt-1">
                            {tab === 'subjects'
                                ? 'Manage the subjects available for filtering videos.'
                                : 'Add and manage video tutorials.'}
                        </p>
                    </div>

                    {/* Panel */}
                    {tab === 'subjects' && <SubjectsPanel showToast={showToast} />}
                    {tab === 'videos'   && <VideosPanel   showToast={showToast} />}
                </main>
            </div>

            {/* Toast stack */}
            <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
                {toasts.map(t => (
                    <div
                        key={t.id}
                        className={`flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-lg text-sm font-medium text-white transition-all animate-in slide-in-from-right-5 ${
                            t.type === 'success' ? 'bg-[#0D9488]' : 'bg-red-500'
                        }`}
                    >
                        {t.type === 'success'
                            ? <CheckCircle className="w-4 h-4 flex-shrink-0" />
                            : <XCircle    className="w-4 h-4 flex-shrink-0" />}
                        {t.message}
                    </div>
                ))}
            </div>
        </div>
    )
}
