import React, { useEffect, useRef, useState } from 'react'

export default function Popover({
  title = 'HEHE',
  children,
  buttonText = 'Naughty Button',
  getContent, // optional function prop to generate content when popover opens
}) {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState(children ?? "Hey Dont Touch me I'm Popover!")
  const containerRef = useRef(null)
  const isHehe = title === 'HEHE'

  useEffect(() => {
    function handleOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  return (
    <div ref={containerRef} style={{ display: 'inline-block', position: 'relative' }}>
      <button
        type="button"
        className="btn btn-lg btn-danger naughty-button"
        onClick={() => {
          setOpen((v) => {
            const next = !v
            if (next && typeof getContent === 'function') {
              try {
                const generated = getContent()
                setContent(generated)
              } catch (e) {
                // ignore generator errors and keep previous content
                // (could log if desired)
              }
            }
            return next
          })
        }}
      >
        {buttonText}
      </button>

      {open && (
        <div
          className={`popover bs-popover-bottom show ${isHehe ? 'popover-hehe' : ''}`}
          role="tooltip"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: 8,
            zIndex: 1000,
            minWidth: 200,
            borderRadius: 25,
            overflow: 'hidden',
            boxShadow: '0 6px 18px rgba(0,0,0,0.2)'
          }}
        >
          {/* arrow removed */}
          <h3 className="popover-header">{title}</h3>
          <div className="popover-body">
            {content}
          </div>
        </div>
      )}
    </div>
  )
}
