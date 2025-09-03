const Copyright = () => {
  return (
    <footer className="bg-[#0A1120] text-gray-400 text-m border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20 flex justify-between items-center">
        <p>© 2025 TimetableAI. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="/privacy" className="hover:text-white">
            Privacy
          </a>
          <a href="/terms" className="hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;
