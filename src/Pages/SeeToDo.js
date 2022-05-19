import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const SeeToDo = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('are you sure')
        if (proceed) {
            fetch(`http://localhost:5000/data/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = comments.filter(comment => comment._id !== id)
                    setComments(remaining)
                })
        }
    }
    const handleComplete = () => {
        toast('Items delete successfully')

    }
    console.log(comments);
    return (
        <div className='container'>
            <div className='grid grid-cols-3 gap-14'>
                {
                    comments.map(comment =>
                        <div className="card w-96 bg-base-100 shadow-xl" key={comment._id}>
                            <div className="card-body">
                                <h2 className="card-title">{comment.name}</h2>
                                <p>{comment.description}</p>
                                <div className="card-actions">
                                    <button onClick={() => handleDelete(comment._id)} className="btn btn-primary">Delete now</button>
                                    <button onClick={handleComplete} className="btn btn-primary">Complete</button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default SeeToDo;