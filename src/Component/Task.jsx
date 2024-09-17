import React from 'react'

const Task = () => {
    const tasks = [
        {
          id: 1,
          title: 'Monthly leaderboard winner 🏆',
          points: '10 Points',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
        },
        {
          id: 2,
          title: 'Share with 5 friends!',
          points: '10 Points',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
        },
        {
            id: 3,
            title: 'Earn daily win Big Rewards!',
            points: '10 Points',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
          },{
            id: 4,
            title: 'Claim 10 Point Every Hour ',
            points: '10 Points',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
          },{
            id: 5,
            title: 'Weekly LeaderBoard Prize ',
            points: '10 Points',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
          },
      ];
  return (
    <div className="bg-gray-100 p-4 h-screen">
      {/* Header */}
      <div className="flex justify-between  items-center bg-gray-600 text-white p-2 rounded-md mb-4">
      <img src="data:image/png;base64,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" 
          alt="Task Planner" className="w-12 h-12" />
        <div className=" text-3xl  ">Task Planet</div>
        <div className="flex items-center space-x-4">
          <button className='bg-blue-500 rounded-md text-white text-sm font-semibold py-1 px-3 rounded hover:bg-blue-600'>My Profile</button>
          <div className="flex items-center space-x-1">
          <button className='bg-blue-500 rounded-md text-white text-sm font-semibold py-1 px-3 rounded hover:bg-blue-600'>Share</button>
            <i className="fas fa-signal"></i>
          </div>
        </div>
      </div>

      {/* Task Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Task Details</h2>
        <div className="flex items-center space-x-4">
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">🎉 3982</span>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">₹2875.00</span>
          <img src="data:image/png;base64,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" 
          alt="Task Planner" className="w-12 h-12" />
        </div>
      </div>

      {tasks.map((task) => (
        <div key={task.id} className="bg-red-500 text-white p-4 rounded-lg flex justify-between items-center mb-4">
          <img
            src={task.imageUrl}
            alt="Task Icon"
            className="w-10 h-10"
          />
          <div className="text-lg">
            <p>{task.title}</p>
          </div>
          <div className="bg-white text-red-500 px-4 py-2 rounded-full font-semibold">{task.points}</div>
        </div>
      ))}

      
      
    </div>
  )
}

export default Task