import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UpdateLessonButton = ({}) => {
  return(
    <div>
      <br></br>
      <button>
        <Link to="/subjects/:subject_id/udpate-lesson">Update This Lesson!</Link>
      </button>
    </div>
  )
}

export default UpdateLessonButton
