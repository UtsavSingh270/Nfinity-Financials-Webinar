"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  CalendarDays,
  Download,
  ImageIcon,
  LayoutDashboard,
  LogOut,
  Pencil,
  Plus,
  Search,
  Upload,
  Users,
  Video,
  X,
} from "lucide-react";

const emptyWebinar = {
  title: "",
  category: "",
  date: "",
  time: "",
  imageUrl: "",
};

const emptyHost = {
  name: "",
  designation: "",
  description: "",
  imageUrl: "",
  position: "",
};

export default function AdminDashboard({ initialWebinars, initialHosts, initialRegistrations }) {
  const [tab, setTab] = useState("overview");
  const [editor, setEditor] = useState(null);
  const [webinars, setWebinars] = useState(initialWebinars);
  const [hosts, setHosts] = useState(() => initialHosts || []);
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => initialRegistrations.filter((item) => `${item.name} ${item.email} ${item.webinarTitle}`.toLowerCase().includes(query.toLowerCase())), [initialRegistrations, query]);

  function openCreate() {
    setMessage("");
    setEditor({ kind: "webinar", ...emptyWebinar });
  }

  function openEdit(webinar) {
    setMessage("");
    setEditor({
      kind: "webinar",
      ...webinar,
    });
  }

  function openCreateHost() {
    setMessage("");
    setEditor({ kind: "host", ...emptyHost });
  }

  function openEditHost(host) {
    setMessage("");
    setEditor({ kind: "host", ...host });
  }

  async function save(event) {
    event.preventDefault();
    if (editor.kind === "host") {
      const body = Object.fromEntries(new FormData(event.currentTarget));
      body.id = editor.id || "";
      body.imageUrl = editor.imageUrl || "";
      const response = await fetch("/api/hosts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      if (!response.ok) {
        setMessage(result.message || "Unable to save host.");
        return;
      }
      setHosts(result.hosts || []);
      setEditor(null);
      return;
    }

    const body = Object.fromEntries(new FormData(event.currentTarget));
    body.imageUrl = editor.imageUrl || "";

    const editing = Boolean(editor.id);
    const response = await fetch(editing ? `/api/webinars/${editor.id}` : "/api/webinars", {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const result = await response.json();

    if (!response.ok) {
      setMessage(result.message || "Unable to save webinar.");
      return;
    }

    setWebinars(editing ? webinars.map((item) => item.id === result.id ? result : item) : [...webinars, result]);
    setEditor(null);
  }

  async function uploadMedia(file, kind) {
    if (!file) return;
    setMessage(`Uploading ${kind}...`);
    const data = new FormData();
    data.append("file", file);
    data.append("kind", kind);
    const response = await fetch("/api/uploads", { method: "POST", body: data });
    const result = await response.json();
    if (!response.ok) {
      setMessage(result.message || "Upload failed.");
      return;
    }
    setEditor((current) => {
      const key = kind === "video"
        ? "videoUrl"
        : kind === "soundFamiliarImage"
          ? "soundFamiliarImageUrl"
          : kind === "hostImage"
            ? "imageUrl"
          : "imageUrl";
      return { ...current, [key]: result.url };
    });
    setMessage("");
  }

  function exportCsv() {
    const head = "Name,Email,Phone,Company,Role,Webinar Source,Question,Registered\n";
    const lines = filtered.map((item) => [item.name, item.email, item.phone, item.company, item.role, item.source || item.webinarTitle, item.question, item.submittedAt || item.createdAt].map((value) => `"${String(value || "").replaceAll('"', '""')}"`).join(",")).join("\n");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([head + lines], { type: "text/csv" }));
    link.download = "nfinity-registrations.csv";
    link.click();
  }

  return (
    <main className="admin-shell">
      <aside>
        <Link className="logo" href="/"><span>NFINITY</span> FINANCIALS <i>ADMIN</i></Link>
        <nav>
          <button className={tab === "overview" ? "active" : ""} onClick={() => setTab("overview")}><LayoutDashboard />Overview</button>
          <button className={tab === "webinars" ? "active" : ""} onClick={() => setTab("webinars")}><CalendarDays />Webinars</button>
          <button className={tab === "hosts" ? "active" : ""} onClick={() => setTab("hosts")}><Users />Hosts</button>
          <button className={tab === "registrations" ? "active" : ""} onClick={() => setTab("registrations")}><Users />Registrations <i>{initialRegistrations.length}</i></button>
        </nav>
        <form action="/api/admin/logout" method="post"><button><LogOut />Log out</button></form>
      </aside>

      <section className="admin-main">
        <header>
          <div>
            <span className="eyebrow">Nfinity Financials</span>
            <h1>{tab[0].toUpperCase() + tab.slice(1)}</h1>
          </div>
          <button type="button" className="primary-button" onClick={tab === "hosts" ? openCreateHost : openCreate}><Plus />{tab === "hosts" ? "New host" : "New webinar"}</button>
        </header>

        {tab === "overview" && (
          <>
            <div className="admin-stats">
              <div><span>Total registrations</span><strong>{initialRegistrations.length}</strong><small>All webinar entries</small></div>
              <div><span>Upcoming sessions</span><strong>{webinars.filter((item) => item.status === "upcoming").length}</strong><small>Ready to publish</small></div>
              <div><span>Audience tracked</span><strong>{webinars.reduce((total, item) => total + Number(item.attendees || 0), 0).toLocaleString()}</strong><small>Across all webinars</small></div>
            </div>
            <div className="admin-panel">
              <div className="panel-title">
                <div><span className="eyebrow">Recent activity</span><h2>Latest registrations</h2></div>
                <button onClick={() => setTab("registrations")}>View all</button>
              </div>
              <RegistrationTable rows={initialRegistrations.slice(0, 6)} />
            </div>
          </>
        )}

        {tab === "webinars" && (
          <div className="admin-panel">
            <div className="panel-title">
              <div><span className="eyebrow">Content library</span><h2>All webinars</h2></div>
              <button onClick={openCreate}><Plus size={14} />Add session</button>
            </div>
            <div className="admin-webinars">
              {webinars.map((webinar) => (
                <div key={webinar.id} className="admin-webinar-row">
                  <div className={`admin-webinar-thumb accent-${webinar.accent || "navy"}`}>
                    {webinar.imageUrl ? <Image src={webinar.imageUrl} alt="" fill sizes="72px" /> : <ImageIcon />}
                  </div>
                  <span>
                    <small>{webinar.category}</small>
                    <b>{webinar.title}</b>
                    <em>{webinar.date} · {webinar.time}</em>
                  </span>
                  <button type="button" className="edit-button" onClick={() => openEdit(webinar)}><Pencil />Edit</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "hosts" && (
          <div className="admin-panel">
            <div className="panel-title">
              <div><span className="eyebrow">Hosts</span><h2>Public host cards</h2></div>
              <button onClick={openCreateHost}><Plus size={14} />Add host</button>
            </div>
            <div className="admin-webinars">
              {hosts.map((host) => (
                <div key={host.id} className="admin-webinar-row">
                  <div className="admin-webinar-thumb accent-navy">
                    {host.imageUrl ? <Image src={host.imageUrl} alt="" fill sizes="72px" /> : <ImageIcon />}
                  </div>
                  <span>
                    <small>{host.designation || "Host"}</small>
                    <b>{host.name}</b>
                    <em style={{ whiteSpace: "pre-line" }}>{host.description}</em>
                  </span>
                  <button type="button" className="edit-button" onClick={() => openEditHost(host)}><Pencil />Edit</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "registrations" && (
          <div className="admin-panel">
            <div className="panel-title">
              <div><span className="eyebrow">Audience</span><h2>Registration details</h2></div>
              <div className="table-actions">
                <label><Search /><input placeholder="Search people or webinar" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
                <button onClick={exportCsv}><Download />Export CSV</button>
              </div>
            </div>
            <RegistrationTable rows={filtered} />
          </div>
        )}
      </section>

      {editor && editor.kind === "host" ? (
        <HostEditor
          host={editor}
          setHost={setEditor}
          message={message}
          onClose={() => setEditor(null)}
          onSave={save}
          onUpload={uploadMedia}
        />
      ) : editor ? (
        <WebinarEditor
          webinar={editor}
          setWebinar={setEditor}
          message={message}
          onClose={() => setEditor(null)}
          onSave={save}
          onUpload={uploadMedia}
        />
      ) : null}
    </main>
  );
}

function HostEditor({ host, setHost, message, onClose, onSave, onUpload }) {
  return (
    <div className="modal-backdrop admin-editor-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <form className="admin-modal webinar-editor" onSubmit={onSave}>
        <button type="button" className="modal-close" onClick={onClose}><X /></button>
        <div className="editor-heading">
          <div>
            <span className="eyebrow">{host.id ? "Edit host" : "Create host"}</span>
            <h2>{host.id ? "Update host" : "Add a new host"}</h2>
          </div>
          <p>Add the host name, designation, image, and description for the public hosts section.</p>
        </div>
        <div className="media-upload-grid">
          <div className="media-upload-card">
            <div className="media-preview image-preview">{host.imageUrl ? <Image src={host.imageUrl} alt="Host preview" fill sizes="360px" /> : <ImageIcon />}</div>
            <div><b>Host image</b><small>JPG, PNG, WebP or GIF</small></div>
            <label className="upload-button"><Upload /> {host.imageUrl ? "Replace image" : "Upload image"}<input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(event) => onUpload(event.target.files[0], "hostImage")} /></label>
          </div>
        </div>
        <div className="admin-form">
          <label>Host name *<input name="name" defaultValue={host.name} required /></label>
          <label>Designation *<input name="designation" defaultValue={host.designation} required /></label>
          <label>Position *<input name="position" type="number" min="1" defaultValue={host.position || ""} placeholder="1" required /></label>
          <label className="wide">Description<textarea name="description" rows={6} defaultValue={host.description} placeholder={"Line one\nLine two"} required /></label>
        </div>
        {message && <p className={message.startsWith("Uploading") ? "form-note" : "form-error"}>{message}</p>}
        <div className="editor-actions">
          <button type="button" className="secondary-button" onClick={onClose}>Cancel</button>
          <button className="primary-button">{host.id ? "Save changes" : "Publish host"} →</button>
        </div>
      </form>
    </div>
  );
}

function WebinarEditor({ webinar, setWebinar, message, onClose, onSave, onUpload }) {
  return (
    <div className="modal-backdrop admin-editor-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <form className="admin-modal webinar-editor" onSubmit={onSave}>
        <button type="button" className="modal-close" onClick={onClose}><X /></button>
        <div className="editor-heading">
          <div>
            <span className="eyebrow">{webinar.id ? "Edit session" : "Create session"}</span>
            <h2>{webinar.id ? "Update webinar" : "Add a new webinar"}</h2>
          </div>
          <p>Add the upcoming webinar image, title, category, date, and time.</p>
        </div>
        <div className="admin-form">
          <label className="wide">Title *<input name="title" defaultValue={webinar.title} required /></label>
          <label>Category *<input name="category" defaultValue={webinar.category} required /></label>
          <label>Date *<input name="date" type="date" defaultValue={webinar.date} required /></label>
          <label>Time *<input name="time" defaultValue={webinar.time} placeholder="6:30 PM AEST" required /></label>
        </div>
        <div className="media-upload-grid">
          <div className="media-upload-card">
            <div className="media-preview image-preview">{webinar.imageUrl ? <Image src={webinar.imageUrl} alt="Webinar cover preview" fill sizes="360px" /> : <ImageIcon />}</div>
            <div><b>Webinar image</b><small>JPG, PNG, WebP or GIF</small></div>
            <label className="upload-button"><Upload /> {webinar.imageUrl ? "Replace image" : "Upload image"}<input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(event) => onUpload(event.target.files[0], "image")} /></label>
          </div>
        </div>
        {message && <p className={message.startsWith("Uploading") ? "form-note" : "form-error"}>{message}</p>}
        <div className="editor-actions">
          <button type="button" className="secondary-button" onClick={onClose}>Cancel</button>
          <button className="primary-button">{webinar.id ? "Save changes" : "Publish webinar"} →</button>
        </div>
      </form>
    </div>
  );
}

function RegistrationTable({ rows }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Person</th>
            <th>Webinar</th>
            <th>Source</th>
            <th>Company / role</th>
            <th>Question</th>
            <th>Registered</th>
          </tr>
        </thead>
        <tbody>
          {rows.length ? rows.map((registration) => (
            <tr key={registration.id}>
              <td><b>{registration.name}</b><small>{registration.email}<br />{registration.phone}</small></td>
              <td>{registration.webinarTitle}</td>
              <td>{registration.source || registration.webinarTitle}</td>
              <td>{registration.company}<small>{registration.role}</small></td>
              <td className="question-cell">{registration.question || "—"}</td>
              <td>{registration.submittedAt ? new Date(registration.submittedAt).toLocaleString("en-AU") : registration.createdAt ? new Date(registration.createdAt).toLocaleString("en-AU") : "—"}</td>
            </tr>
          )) : <tr><td colSpan={6} className="empty-table">No registrations yet.</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
