import { useState } from "react";
import styles from "../../pages/home/home.module.scss";

function TokenomicsMb() {
	const [hoverdItem, setHoveredItem] = useState(0);

	return (
		<div className={styles.tokenomicsMb}>
			<svg
                
				className={styles.tokenomicsGraphMb}
				xmlns="http://www.w3.org/2000/svg"
				width="278"
				height="277"
				fill="none"
				viewBox="0 0 278 277"
			>
				<path
					onMouseEnter={() => {
						setHoveredItem(1);
					}}
					onMouseLeave={() => {
						setHoveredItem(0);
					}}
					style={{ transition: "all .4s ease-in-out" }}
					fillOpacity={hoverdItem === 1 ? "1" : hoverdItem > 0 ? "0.2" : "0.8"}
					fill="#fff"
					stroke="#040B11"
					strokeWidth="3.719"
					d="M138.861 12.768c-.001-6.162 5.002-11.206 11.144-10.705a136.744 136.744 0 0180.499 34.776c4.574 4.13 4.331 11.23-.157 15.452L178.88 100.72c-4.488 4.223-11.502 3.856-16.72.578a43.872 43.872 0 00-12.244-5.29c-5.964-1.553-11.04-6.408-11.041-12.57l-.014-70.67z"
				></path>
				<path
					fill="#fff"
					onMouseEnter={() => {
						setHoveredItem(2);
					}}
					onMouseLeave={() => {
						setHoveredItem(0);
					}}
					style={{ transition: "all .4s ease-in-out" }}
					fillOpacity={hoverdItem === 2 ? "1" : hoverdItem > 0 ? "0.2" : "0.6"}
					stroke="#040B11"
					strokeWidth="3.719"
					d="M230.433 52.383c4.492-4.219 11.594-4.024 15.432.797 4.255 5.345 8.104 11 11.514 16.92 3.076 5.34.651 12.018-4.922 14.648l-67.806 32.005c-3.42 1.614-7.46.11-9.588-3.017-2.127-3.126-2.044-7.436.713-10.025l54.657-51.328z"
				></path>
				<path
					fill="#fff"
					onMouseEnter={() => {
						setHoveredItem(3);
					}}
					onMouseLeave={() => {
						setHoveredItem(0);
					}}
					style={{ transition: "all .4s ease-in-out" }}
					fillOpacity={hoverdItem === 3 ? "1" : hoverdItem > 0 ? "0.2" : "0.4"}
					stroke="#040B11"
					strokeWidth="3.719"
					d="M252.511 84.862c5.575-2.625 12.269-.246 14.431 5.525a136.687 136.687 0 015.724 19.648c1.276 6.029-3.092 11.632-9.205 12.412l-74.376 9.497c-3.751.479-7.129-2.199-8.187-5.83-1.058-3.631.353-7.704 3.775-9.315l67.838-31.937z"
				></path>
				<path
					fill="#fff"
					onMouseEnter={() => {
						setHoveredItem(4);
					}}
					onMouseLeave={() => {
						setHoveredItem(0);
					}}
					style={{ transition: "all .4s ease-in-out" }}
					fillOpacity={hoverdItem === 4 ? "1" : hoverdItem > 0 ? "0.2" : "0.1"}
					stroke="#040B11"
					strokeWidth="3.719"
					d="M266.067 122.243c4.683-.593 8.988 2.723 9.288 7.433.299 4.711-3.551 8.545-8.271 8.549l-81.705.082c-1.51.002-2.727-1.223-2.823-2.73-.096-1.508.956-2.876 2.455-3.066l81.056-10.268z"
				></path>
				<path
					fill="#fff"
					onMouseEnter={() => {
						setHoveredItem(5);
					}}
					onMouseLeave={() => {
						setHoveredItem(0);
					}}
					style={{ transition: "all .4s ease-in-out" }}
					fillOpacity={hoverdItem === 5 ? "1" : hoverdItem > 0 ? "0.2" : "0.2"}
					stroke="#040B11"
					strokeWidth="3.719"
					d="M264.472 138.354c6.163 0 11.206 5.004 10.704 11.146a136.867 136.867 0 01-3.19 20.215c-1.414 5.998-7.752 9.206-13.615 7.308l-71.337-23.087c-3.598-1.164-5.514-5.026-4.924-8.762.589-3.736 3.601-6.82 7.383-6.82h74.979z"
				></path>
				<path
					fill="#fff"
					onMouseEnter={() => {
						setHoveredItem(6);
					}}
					onMouseLeave={() => {
						setHoveredItem(0);
					}}
					style={{ transition: "all .4s ease-in-out" }}
					fillOpacity={hoverdItem === 6 ? "1" : hoverdItem > 0 ? "0.2" : "1"}
					stroke="#040B11"
					strokeWidth="3.719"
					d="M258.332 177.143c5.861 1.903 9.112 8.22 6.737 13.907a136.738 136.738 0 01-104.728 82.354A136.74 136.74 0 012.574 149.209 136.744 136.744 0 01127.551 2.08c6.141-.51 11.153 4.526 11.161 10.688l.098 70.67c.009 6.162-5.059 11.025-11.02 12.588a43.755 43.755 0 00-32.523 45.801 43.761 43.761 0 0080.483 20.103c3.32-5.191 9.507-8.518 15.368-6.614l67.214 21.827z"
				></path>
			</svg>
			<div className={styles.tokenomicsList}>
				<div className={styles.tokenomicsListItemBlock}>
					<div
						style={{
							background: `rgba(255, 255, 255, ${
								hoverdItem === 6 ? 1 : hoverdItem > 0 ? 0.2 : 1
							})`,
						}}
						className={styles.tokenomicsListItemZone}
					></div>
					<div className={styles.tokenomicsListItemPercent}>70%</div>
					<div className={styles.tokenomicsListItem}>Airdrpop</div>
				</div>
				<div className={styles.tokenomicsListItemBlock}>
					<div
						style={{
							background: `rgba(255, 255, 255, ${
								hoverdItem === 1 ? 1 : hoverdItem > 0 ? 0.2 : 0.8
							})`,
						}}
						className={styles.tokenomicsListItemZone}
					></div>
					<div className={styles.tokenomicsListItemPercent}>13%</div>
					<div className={styles.tokenomicsListItem}>Liquidity</div>
				</div>
				<div className={styles.tokenomicsListItemBlock}>
					<div
						style={{
							background: `rgba(255, 255, 255, ${
								hoverdItem === 2 ? 1 : hoverdItem > 0 ? 0.2 : 0.6
							})`,
						}}
						className={styles.tokenomicsListItemZone}
					></div>
					<div className={styles.tokenomicsListItemPercent}>5%</div>
					<div className={styles.tokenomicsListItem}>Partnerships</div>
				</div>
				<div className={styles.tokenomicsListItemBlock}>
					<div
						style={{
							background: `rgba(255, 255, 255, ${
								hoverdItem === 3 ? 1 : hoverdItem > 0 ? 0.2 : 0.4
							})`,
						}}
						className={styles.tokenomicsListItemZone}
					></div>
					<div className={styles.tokenomicsListItemPercent}>5%</div>
					<div className={styles.tokenomicsListItem}>Marketing</div>
				</div>
				<div className={styles.tokenomicsListItemBlock}>
					<div
						style={{
							background: `rgba(255, 255, 255, ${
								hoverdItem === 4 ? 1 : hoverdItem > 0 ? 0.2 : 0.1
							})`,
						}}
						className={styles.tokenomicsListItemZone}
					></div>
					<div className={styles.tokenomicsListItemPercent}>2%</div>
					<div className={styles.tokenomicsListItem}>Investors Fund</div>
				</div>
				<div className={styles.tokenomicsListItemBlock}>
					<div
						style={{
							background: `rgba(255, 255, 255, ${
								hoverdItem === 5 ? 1 : hoverdItem > 0 ? 0.2 : 0.2
							})`,
						}}
						className={styles.tokenomicsListItemZone}
					></div>
					<div className={styles.tokenomicsListItemPercent}>5%</div>
					<div className={styles.tokenomicsListItem}>Developing</div>
				</div>
			</div>
		</div>
	);
}

export default TokenomicsMb;
