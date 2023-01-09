
export default function Select() {
    return (
        <form action="" className="flex flex-col space-y-2 bg-blue-400 p-5 focus-within:bg-blue-500">
            <input type="text" required placeholder="Username" className="required:border-2 border-yellow-200 invalid:bg-red-200 placeholder-shown:bg-green-200"/>
            <input type="text" required placeholder="Email" className="peer required:border-2 border-green-200"/>
            <span className="hidden peer-invalid:block peer-invalid:text-red-600">This is valied</span>
            <span className="hidden peer-valid:block peer-valid:text-white">This is valied</span>
            <input type="password" required placeholder="Password" />
            <input type="submit" value="Login" className="bg-white" />
        </form>
    );
  }
  