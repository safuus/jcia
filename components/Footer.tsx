export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div>
          <span className="font-semibold text-gray-900">Just Code It Academy</span>
          {" "}· Redmond, WA · Affiliated with{" "}
          <a href="https://codingmind.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            CodingMind Academy
          </a>
        </div>
        <div className="flex gap-6">
          <a href="mailto:wa@codingmind.com" className="hover:text-gray-900 transition-colors">Contact</a>
          <a href="https://ygn.ngo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">YGN Partner</a>
        </div>
      </div>
    </footer>
  );
}
