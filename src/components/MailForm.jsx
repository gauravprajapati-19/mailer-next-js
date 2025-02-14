export const MailForm = () => {
    return (
        <div className="max-w-md mx-auto mt-6 p-4 rounded-md bg-white shadow-md">
            <h1 className="text-2xl font-bold mb-4">Email</h1>
            <form className="space-y-4">
                <div>
                    <input placeholder="Name" id="name" type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                    <input placeholder="Email" id="email" type="email" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                    <input placeholder="Subject" id="subject" type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                    <textarea
                        placeholder="Message"
                        id="message"
                        rows="4"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md">
                    Submit
                </button>
            </form>
        </div>
    );
};
