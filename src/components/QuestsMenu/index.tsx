import React, { useEffect, useRef } from 'react';
import { motion, useCycle } from 'framer-motion';

import AddQuest from '../AddQuest';

import s from './style.module.scss';

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(30px at 40px 40px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const QuestsMenu = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

	return (
		<motion.nav
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}
			className={s.menu}
		>
			<motion.div className={s.background} variants={sidebar} />
			<Navigation />
			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	);
};

const variantsOne = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const colors = ['#b3b3b3', '#09e14a', '#9C1AFF', '#0051ff'];

export const QuestItem = ({ i }: any) => {
	const style = { backgroundColor: `${colors[i]}` };
	return (
		<motion.li
			variants={variantsOne}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<div className={s['icon-placeholder']} style={style} />
			<div className={s['text-placeholder']}>Квест</div>
		</motion.li>
	);
};

const Path = (props: any) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(0, 0%, 18%)"
		strokeLinecap="round"
		{...props}
	/>
);

export const MenuToggle = ({ toggle }: any) => (
	<button className={s['menu-toggle']} onClick={toggle}>
		<svg width="23" height="23" viewBox="0 0 23 23">
			<Path
				variants={{
					closed: { d: 'M 2 2.5 L 20 2.5' },
					open: { d: 'M 3 16.5 L 17 2.5' },
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: 'M 2 16.346 L 20 16.346' },
					open: { d: 'M 3 2.5 L 17 16.346' },
				}}
			/>
		</svg>
	</button>
);

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const Navigation = () => (
	<motion.div variants={variantsOne}>
		<motion.ul variants={variants}>
			{itemIds.map(i => (
				<QuestItem i={i} key={i} />
			))}
			<AddQuest />
		</motion.ul>
	</motion.div>
);

const itemIds = [0, 1, 2, 3];

export const useDimensions = (ref: any) => {
	const dimensions = useRef({ width: 0, height: 0 });

	useEffect(() => {
		dimensions.current.width = ref.current.offsetWidth;
		dimensions.current.height = ref.current.offsetHeight;
	}, []);

	return dimensions.current;
};
