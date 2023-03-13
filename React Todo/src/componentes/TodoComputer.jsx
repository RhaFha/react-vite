const TodoComputer = ({ computerItemsLeft, clearItemsCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white p-4 dark:bg-gray-800">
            <span className="text-gray-400">{computerItemsLeft} item left</span>
            <button className="text-gray-400" onClick={clearItemsCompleted}>
                Clear complete
            </button>
        </section>
    );
};

export default TodoComputer;
