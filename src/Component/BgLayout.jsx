function BgLayout({ children, height }) {
  return (
    <div className={`bg-slate-900 bg-gradient-to-r from-purple-900 to-slate-800 ${height}`}>
      {children}
    </div>
  );
}

export default BgLayout;
