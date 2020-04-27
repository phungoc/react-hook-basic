import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

const PostFilterForm = props => {

   const { onSubmit } = props;
   const [searchTerm, setSearchTerm] = useState('');
   const typingTimeoutRef = useRef(null);

   const handleSearchTermChange = (e) => {

      setSearchTerm(e.target.value);

      if (!onSubmit) return;

      // Set -- 100 -- clear, set -- 300 -> submit
      // Set -- 300 -> submit
      if (typingTimeoutRef.current) {
         clearTimeout(typingTimeoutRef.current);
      }

      typingTimeoutRef.current = setTimeout(() => {
         const formValue = {
            searchTerm,
         };

         onSubmit(formValue);
      }, 300);
   }

   return (
      <form>
         <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
      </form>
   )
}

PostFilterForm.propTypes = {
   onSubmit: PropTypes.func,
}

PostFilterForm.defaultProps = {
   onSubmit: null,
}

export default PostFilterForm
