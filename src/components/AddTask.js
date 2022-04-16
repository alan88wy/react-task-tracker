import React from 'react'
import { useState } from 'react'

export const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert("Please Add Task")
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className = 'add-form' onSubmit={ onSubmit }>
            <div className="form-control">
                <label>Task</label>
                <input 
                    type="text"
                    placeholder="Add Task"
                    onChange = {(e) => setText(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input 
                    type="text"
                    name="day"
                    placeholder="Add Date & Time" 
                    onChange = {(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                    type="checkbox"
                    name="reminder" 
                    checked={reminder}
                    onChange = {(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
        
            <input type="submit" value="Save task" className="btn btn-block"/>
        </form>
    )
}
