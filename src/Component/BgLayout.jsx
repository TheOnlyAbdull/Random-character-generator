function BgLayout({ children}) {
  return (
    <div className='bg-slate-900 bg-gradient-to-r from-purple-900 to-slate-800 bg-fixed'>
      {children}
    </div>
  );
}

export default BgLayout;
