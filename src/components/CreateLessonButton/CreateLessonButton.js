import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CreateLessonButton = ({}) => {
  return(
    <div>
      <br></br>
      <button>
        <Link to="/subjects/:subject_id/new-lesson">Create a New Lesson!</Link>
      </button>
    </div>
  )
}

export default CreateLessonButton
