import PropTypes from 'prop-types';
import React, { useState } from 'react';

const TodoForm = (props) => {

   const { onSubmit } = props;
   const [value, setValue] = useState('');

   const handleValueChange = (e) => {
      setValue(e.target.value);
   }

   const handleSubmit = (e) => {
      // Prevent reload browser
      e.preventDefault();

      if (!onSubmit) return;

      const formValues = {
         title: value,
      }

      onSubmit(formValues);

      // Reset input
      setValue('');
   }



   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            value={value}
            onChange={handleValueChange}
         />
      </form>
   )
}

TodoForm.propTypes = {
   onSubmit: PropTypes.func,
}

TodoForm.defaultProps = {
   onSubmit: null,
}

export default TodoForm
