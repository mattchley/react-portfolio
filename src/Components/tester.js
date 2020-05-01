import React, { useState, useEffect } from "react";
import axios from 'axios';

function Tester() {

  const user = 'mattchley';
  const githubToken = 'b310da4ab369999c52c738e8757be7901ff58d0f';

  useEffect(() => {

    axios({ 
      method:'get',
      url: `https://api.github.com/users/${user}/repos`,
      headers: {
        'Authorization': `Basic ${githubToken}`
      }
    })
      .then(res => {
        console.log(res.data)
      })

  })
  return (
    <div>
      test
    </div>
  )
}

export default Tester
