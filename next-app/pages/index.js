import { useState } from 'react'

export default function Home() {
  const [ageGroup, setAgeGroup] = useState('')
  const [exercise, setExercise] = useState('')
  const [calories, setCalories] = useState('')
  const [gi, setGi] = useState('')
  const [giLevel, setGiLevel] = useState('')

  const handleGiCheck = () => {
    const num = parseInt(gi)
    if (isNaN(num)) {
      setGiLevel('')
      return
    }
    if (num < 55) setGiLevel('Low GI')
    else if (num < 70) setGiLevel('Medium GI')
    else setGiLevel('High GI')
  }

  return (
    <div className="min-h-screen bg-green-100 text-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-green-700">Prep Meal Quick</h1>
        <section className="space-y-2">
          <h2 className="font-semibold">Your Profile</h2>
          <input
            className="w-full border p-2 rounded"
            placeholder="Age group (e.g., 25-34)"
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
          />
          <input
            className="w-full border p-2 rounded"
            placeholder="Exercise level (e.g., light, moderate)"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          />
          <input
            className="w-full border p-2 rounded"
            placeholder="Calories per day"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <p className="text-sm text-gray-600">
            These values are for reference only. Consult a healthcare professional for personalized advice.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="font-semibold">Check GI Level</h2>
          <input
            className="w-full border p-2 rounded"
            placeholder="Enter GI value"
            value={gi}
            onChange={(e) => setGi(e.target.value)}
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleGiCheck}>
            Check
          </button>
          {giLevel && <p className="font-bold">{giLevel}</p>}
        </section>
        <section className="space-y-2">
          <h2 className="font-semibold">Quick Guides</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Weight loss: focus on balanced meals with lean proteins and vegetables.</li>
            <li>Muscle gain: include sufficient protein and complex carbs.</li>
            <li>Maintain health: keep portions moderate and stay active.</li>
            <li>Quick meal prep: plan simple recipes and cook in batches.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
