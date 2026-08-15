import React, { useState } from 'react';
import { Home, Info, Newspaper, FileText, Image, Video, BookOpen, Calendar, Mail, ShieldAlert, Upload, UserPlus, Layers, KeyRound, LogOut, ChevronDown, UserCheck } from 'lucide-react';

export default function Navbar({ user, activeTab, setActiveTab, onOpenAdmin, onOpenUpload, onOpenBulkUpload, onOpenRegister, onOpenChangePassword, onLogout }) {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const navs = [
    { id: 'home', label: 'Trang chủ', icon: <Home size={15} /> },
    { id: 'intro', label: 'Giới thiệu', icon: <Info size={15} /> },
    { id: 'news', label: 'Tin Tức', icon: <Newspaper size={15} /> },
    { id: 'documents', label: 'Văn bản', icon: <FileText size={15} /> },
    { id: 'albums', label: 'Albums', icon: <Image size={15} /> },
    { id: 'videos', label: 'Videos', icon: <Video size={15} /> },
    { id: 'resources', label: 'Tài nguyên', icon: <BookOpen size={15} /> },
    { id: 'schedule', label: 'Lịch làm việc', icon: <Calendar size={15} /> },
    { id: 'contact', label: 'Liên hệ', icon: <Mail size={15} /> },
  ];

  return (
    <nav className="main-navbar" style={{ position: 'relative' }}>
      {navs.map((nav) => (
        <a
          key={nav.id}
          className={`nav-item ${nav.id === 'home' ? 'home-icon' : ''} ${activeTab === nav.id ? 'active' : ''}`}
          onClick={() => setActiveTab(nav.id)}
        >
          {nav.icon}
          <span>{nav.label}</span>
        </a>
      ))}

      {/* Register Member Button */}
      <a className="nav-item" style={{ background: '#d97706', fontWeight: '700', marginLeft: 'auto' }} onClick={onOpenRegister}>
        <UserPlus size={15} />
        <span>👤 Đăng Ký</span>
      </a>

      {/* Change Password Button */}
      <a className="nav-item" style={{ background: '#7c3aed', fontWeight: '700' }} onClick={onOpenChangePassword}>
        <span>🔑 Đổi MK</span>
      </a>

      {/* Quick Upload Button */}
      <a className="nav-item" style={{ background: '#16a34a', fontWeight: '700' }} onClick={onOpenUpload}>
        <Upload size={15} />
        <span>📤 Tải Đơn</span>
      </a>

      {/* Bulk Upload Button */}
      <a className="nav-item" style={{ background: '#0284c7', fontWeight: '700' }} onClick={onOpenBulkUpload}>
        <Layers size={15} />
        <span>📦 Tải Hàng Loạt</span>
      </a>

      {/* Logged in User Menu OR Admin Portal Button */}
      {user ? (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <a 
            className="nav-item admin-btn" 
            style={{ background: '#0056a6', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            title="Bấm vào tên để mở menu tài khoản và Đổi Mật Khẩu"
          >
            <UserCheck size={16} />
            <span>👤 {user.fullName || user.username}</span>
            <ChevronDown size={14} />
          </a>

          {showUserDropdown && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '100%',
              background: 'white',
              boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
              borderRadius: '8px',
              padding: '6px 0',
              zIndex: 1000,
              minWidth: '200px',
              border: '1px solid #cbd5e1',
              marginTop: '4px'
            }}>
              <div style={{ padding: '8px 14px', borderBottom: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '12px', color: '#64748b' }}>
                Đang đăng nhập: <strong style={{ color: '#003a73', display: 'block', fontSize: '13px' }}>{user.fullName || user.username}</strong>
              </div>
              <button
                onClick={() => { setShowUserDropdown(false); if (onOpenChangePassword) onOpenChangePassword(); }}
                style={{ width: '100%', padding: '10px 14px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: '700', color: '#7c3aed', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <KeyRound size={16} /> 🔑 Đổi Mật Khẩu
              </button>
              <button
                onClick={() => { setShowUserDropdown(false); if (onOpenAdmin) onOpenAdmin(); }}
                style={{ width: '100%', padding: '10px 14px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: '600', color: '#0056a6', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <ShieldAlert size={16} /> 🛡️ Cổng Quản Trị
              </button>
              <div style={{ borderTop: '1px solid #e2e8f0', margin: '4px 0' }}></div>
              <button
                onClick={() => { setShowUserDropdown(false); if (onLogout) onLogout(); }}
                style={{ width: '100%', padding: '10px 14px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: '600', color: '#dc2626', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <LogOut size={16} /> 🚪 Đăng Xuất
              </button>
            </div>
          )}
        </div>
      ) : (
        <a className="nav-item admin-btn" onClick={onOpenAdmin}>
          <ShieldAlert size={15} />
          <span>Quản Trị</span>
        </a>
      )}
    </nav>
  );
}
