import { useState } from 'react';

export function ContainerForms() {

    const [taskName, setTaskName] = useState('');
    const [taskTimer, setTaskTimer] = useState('');
    const [taskNodes, setTaskNodes] = useState('');

    return (
        <>
            <header>
                <h2>Add new task</h2>
            </header>
            <form>
                <h1>{taskName}</h1>
                <label htmlFor="Task Name">
                    Task Name
                    <input id="Task Name" onChange={e => setTaskName(e.target.value)} placeholder="exemplo - wake up" />
                </label>
                <label htmlFor="Time">
                    Time
                    <input id="Time" placeholder="exemplo - 07:00 AM" />
                </label>
                <label htmlFor="Notes">
                    Notes
                    <input id="Notes" placeholder="new habits" />
                </label>
                <button>Submit</button>
            </form>
        </>
    );
}