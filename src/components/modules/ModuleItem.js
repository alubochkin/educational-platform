import React from 'react'

export default function ModuleItem({ module }) {
  return (
    <div>
      {module.title}
      <button>
        редактировать
      </button>
    </div>
  )
}

