import { Button } from "../Button";
import { Card } from "../Card";
import { TextArea } from "../TextArea";

export function CommentArea() {
    return (
        <>
            <div className="m-24">
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className=" flex items-center justify-between px-3 py-2 border-b bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 rounded-t-lg">

                    </div>

                    <form className="px-4 py-2 bg-zinc-900 rounded-b-lg dark:bg-gray-800">
                        <TextArea />
                    </form>
                </div>
                <div className="flex justify-end">
                    <Button text="Send" type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg hover:bg-blue-800" />
                </div>
                <Card />
            </div>
        </>
    );
}