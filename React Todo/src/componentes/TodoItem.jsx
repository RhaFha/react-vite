import CrossIcon from "./icoms/CrossIcon";
import CheckIcon from "./icoms/CheckIcon";

const TodoItem = ({ todo, handleUpdate, handleRemove }) => {
    const { id, title, completed } = todo;

    const handleClickUpdate = () => {
        handleUpdate(id);
    };

    const handleClickRemove = () => {
        handleRemove(id);
    };

    return (
        <article className="flex items-center gap-4 border-b border-b-gray-400 dark:bg-gray-800 ">
            {/* <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
                <CheckIcon className="" />
            </button> */}
            <button
                className={
                    completed
                        ? "flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "inline-block h-5 w-5 flex-none rounded-full border-2"
                }
                onClick={handleClickUpdate}
            >
                {completed && <CheckIcon />}
            </button>
            <p
                className={`grow text-gray-600 dark:text-gray-400 ${
                    completed && "line-through"
                }`}
            >
                {title}
            </p>
            <button className="flex-none" onClick={handleClickRemove}>
                <CrossIcon />
            </button>
        </article>
    );
};

export default TodoItem;
