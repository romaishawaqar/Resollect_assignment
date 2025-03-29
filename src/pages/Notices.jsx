const Notices = () => {
    const notices = [
      { id: 1, title: "System Maintenance", content: "Scheduled maintenance on April 2nd." },
      { id: 2, title: "New Policy Update", content: "Updated user terms effective immediately." }
    ];
  
    return (
      <div className="fixed top-20 right-10 w-96 p-4 border rounded shadow-md bg-white">
        <h2 className="text-lg font-bold mb-2 text-center">Notices</h2>
        <ul>
          {notices.map(notice => (
            <li key={notice.id} className="p-2 border-b">
              <strong>{notice.title}</strong>: {notice.content}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Notices;
  