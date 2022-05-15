import React, { useEffect, useState } from 'react';

import Button from '@components/Common/Button';

import s from './style.module.scss';

const Timer = () => {
	const [startTime, setStartTime] = useState(0);
	const [time, setTime] = useState(0);
	const [timerOn, setTimeOn] = useState(false);

	useEffect(() => {
		let interval = null as unknown as ReturnType<typeof setInterval>;
		if (timerOn) {
			interval = setInterval(() => {
				setTime(Date.now() - startTime);
			}, 1000);
		} else clearInterval(interval);

		return () => clearInterval(interval);
	}, [timerOn]);

	return (
		<div className={s.timer}>
			<h2 className={s.time}>
				<span>{('0' + Math.floor((time / 60000) % 60)).slice(-2, -1)}</span>
				<span>{('0' + Math.floor((time / 60000) % 60)).slice(-1)}</span>
				<span>:</span>
				<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2, -1)}</span>

				<span>{('0' + Math.floor((time / 1000) % 60)).slice(-1)}</span>
			</h2>
			{!timerOn && time === 0 && (
				<Button
					onClick={() => {
						setTimeOn(true);
						setStartTime(Date.now());
					}}
				>
					Start
				</Button>
			)}
			{timerOn && <Button onClick={() => setTimeOn(false)}>Stop</Button>}
			{!timerOn && time !== 0 && (
				<Button
					onClick={() => {
						setStartTime(Date.now() - time);
						setTimeOn(true);
					}}
				>
					Resume
				</Button>
			)}
			{time !== 0 && (
				<Button
					onClick={() => {
						setTimeOn(false);
						setStartTime(Date.now());
						setTime(0);
					}}
				>
					Reset
				</Button>
			)}
		</div>
	);
};

export default Timer;
