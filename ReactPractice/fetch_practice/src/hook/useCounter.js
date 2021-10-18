import React, { useState } from 'react';

export const UseCounter = () => {
	const [value, setValue] = useState('')
	return <input value={value} onChange={(e) => console.log('event', e.target.value)} />
}