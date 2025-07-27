// src/pages/intro/LessonPage.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import { lessons } from './beginner-lessons'

export default function LessonPage() {
  const { lessonId } = useParams()
  const lesson = lessons.find((l) => l.id === lessonId)

  if (!lesson) {
    return <div className="p-6 text-red-600">Lesson not found.</div>
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-lg mb-6">{lesson.content}</p>

      {/* Optional: Code editor or embed here */}
      <div className="border rounded-lg bg-gray-100 p-4">
        <p className="text-gray-500 italic">Code editor or video could go here.</p>
      </div>
    </div>
  )
}
