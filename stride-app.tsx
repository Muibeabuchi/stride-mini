"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Trash2, StickyNote } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [selectedNote, setSelectedNote] = useState(null)

  // Sample data
  const sampleTasks = [
    { id: 1, text: "Complete project proposal", completed: false },
    { id: 2, text: "Review team feedback", completed: true },
    { id: 3, text: "Schedule client meeting", completed: false },
  ]

  const sampleNotes = [
    {
      id: 1,
      title: "Meeting Notes",
      content:
        "Discussed project timeline and deliverables. Need to follow up on budget approval and resource allocation for Q2.",
    },
    {
      id: 2,
      title: "Ideas for App Features",
      content:
        "Consider adding dark mode, push notifications, and offline sync capabilities. User feedback suggests these are high priority.",
    },
    {
      id: 3,
      title: "Weekly Goals",
      content:
        "Focus on completing the authentication system, setting up the database schema, and preparing for the demo presentation.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Stride</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Task Manager Section */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add Task Form */}
              <div className="flex gap-2">
                <Input placeholder="Type a new task..." className="flex-1" />
                <Button className="shrink-0">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </Button>
              </div>

              {/* Task List */}
              <div className="space-y-3">
                {sampleTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      task.completed ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200 hover:border-gray-300"
                    } transition-colors`}
                  >
                    <Checkbox checked={task.completed} className="shrink-0" />
                    <span className={`flex-1 ${task.completed ? "text-gray-500 line-through" : "text-gray-900"}`}>
                      {task.text}
                    </span>
                    <Button variant="ghost" size="icon" className="shrink-0 text-gray-400 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notes Section */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <StickyNote className="w-5 h-5 text-yellow-500" />
                Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add Note Form */}
              <div className="space-y-3">
                <Input placeholder="Note title..." />
                <Textarea placeholder="Write your note content here..." rows={3} />
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Note
                </Button>
              </div>

              {/* Notes List */}
              <div className="space-y-3">
                {sampleNotes.map((note) => (
                  <div key={note.id} className="space-y-2">
                    <div
                      className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedNote === note.id
                          ? "bg-blue-50 border-blue-200"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedNote(selectedNote === note.id ? null : note.id)}
                    >
                      <span className="font-medium text-gray-900">{note.title}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0 text-gray-400 hover:text-red-500"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Expanded Note Content */}
                    {selectedNote === note.id && (
                      <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                        <p className="text-gray-700 text-sm leading-relaxed">{note.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
