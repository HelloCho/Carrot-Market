
export default function MoreModifiers() {
    return (
        <div className="flex flex-col space-y-2 p-5">
            <details className="select-none open:text-white open:bg-indigo-400">
                <summary className="select-none cursor-pointer">What is my fav. foo.</summary>
                <span className="selection:bg-indigo-400 selection:text-white">김치</span>
            </details>
            {/* <ul className="list-disc marker:text-teal-200">  */}
            <ul className="list-decimal marker:text-teal-200"> 
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
            </ul>
            <input type="file" className="file:cursor-pointer file:hover:text-purple-600 file:hover:bg-white file:hover:border-purple-400 file:hover:border file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400" />
            <p className="first-letter:text-5xl first-letter:hover:text-purple-200">Lorem ipsum asdf.sadf saf s fsf </p>
        </div>
    );
  }
  