import { useState } from "react";
import Header from "../../components/header";
import styles from "./home.module.scss";
import ReactPlayer from "react-player";
// import Video from "/video-bg.webp";
import Footer from "../../components/footer";
import MediumFlower from "/medium-flower.webp";
import RoadmapFlowerRight from "/flower-roadmap-right.webp";
import Tokenomics from "./../../components/svg/Tokenomics.tsx";
import TokenomicsMb from "../../components/svg/TokenomicsMb.tsx";

import  useMeasure  from  'react-use-measure' 
import {useEffect, useContext, createContext } from 'react'

export const ValueContext = createContext(0)


const Home = ({ style, styleTop }) => {
	const [start, setStart] = useState(false);
	
	const [refs, { y }] = useMeasure();
	const { setYPos } = useContext(ValueContext)
	
	useEffect(() => {
		setYPos(y)
	}, [setYPos, y])

	const handleStart = () => {
		setStart(true);
	};

	return (
		<main>
			<section className={styles.sectionTopBlock}>
				<Header />
				<div style={styleTop} className={styles.titleBlock}>
					<h1 className={styles.title}>Nise — Collect flowers and level up</h1>
					<p className={styles.description}>
                        Welcome to Nise – catch buds and get $NISE coin for them. Join the game now.
					</p>
					<a
						href="https://t.me/niseappbot"
						target="_blank"
						className={styles.titleButton}
					>
						Play Now
					</a>
				</div>
			</section>

			<section className={styles.line}>
				<div className={styles.lineScrollingTextContainer}>
					<div className={styles.lineScrollingText}>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
					</div>
					<div className={styles.lineScrollingText}>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
					</div>
					<div className={styles.lineScrollingText}>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
							<span>NISE</span>
					</div>
				</div>
			</section>

			<section className={styles.video}>
				<div className={styles.player}>
					<ReactPlayer
						className={styles.playerReact}
						url="/fin.mp4"
						width="100%"
						height="100%"
						playing={start}
						onEnded={() => setStart(false)}
					/>

					{!start && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="80"
							height="80"
							viewBox="0 0 80 80"
							fill="none"
							className={styles.playButton}
							onClick={handleStart}
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M26.6875 9.34097C26.7273 9.36754 26.7673 9.3942 26.8074 9.42094L61.9698 32.8626C62.9873 33.5407 63.9306 34.1695 64.6551 34.7538C65.4112 35.3636 66.3025 36.2091 66.8155 37.4461C67.4936 39.0812 67.4936 40.9187 66.8155 42.5537C66.3025 43.7908 65.4112 44.6363 64.6551 45.2461C63.9306 45.8304 62.9874 46.4591 61.97 47.1372L26.6876 70.6588C25.444 71.488 24.3257 72.2337 23.3768 72.7479C22.4273 73.2625 21.1239 73.8505 19.6026 73.7597C17.6568 73.6435 15.8593 72.6815 14.6833 71.1269C13.7638 69.9116 13.5301 68.5009 13.4316 67.4254C13.3331 66.3507 13.3332 65.0067 13.3333 63.512L13.3333 16.632C13.3333 16.5838 13.3333 16.5358 13.3333 16.4879C13.3332 14.9932 13.3331 13.6492 13.4316 12.5745C13.5301 11.499 13.7638 10.0883 14.6833 8.87296C15.8593 7.31837 17.6568 6.35637 19.6026 6.24019C21.1239 6.14936 22.4273 6.73739 23.3768 7.25199C24.3257 7.76622 25.4439 8.51181 26.6875 9.34097Z"
								fill="white"
							/>
						</svg>
					)}
					<div className={styles.playShadow}></div>
				</div>
			</section>
			<section className={styles.roadmap}>
				<div className={styles.sectionTop}>
					<h2 className={styles.sectionTitle}>Roadmap</h2>
					<p className={styles.sectionDescription}>
						To increase your status, you need to open chests from which the
						status falls
					</p>
					<img src={MediumFlower} alt="flower" className={styles.flower1} />
					<img
						src={RoadmapFlowerRight}
						alt="flower"
						className={styles.flower2}
					/>
				</div>
				<div className={styles.roadmapContainer}>
					<div className={styles.progress}></div>
					<div className={styles.roadmapBlock}>
						<div className={styles.progressBar}>
							<div className={styles.progressBarCircle}></div>
							<span></span>
							<div className={styles.progressBarCircle}></div>
						</div>
						<div className={styles.roadmapBlockTop}>
							<h3 className={styles.roadmapBlockTitle}>Q3 2024</h3>
							<p className={styles.roadmapBlockPhase}>PHASE 1</p>
						</div>
						<div className={styles.roadmapBlockBottom}>
							<div className={styles.roadmapBlockDescription}>
								Project Concept and Planning
							</div>
							<div className={styles.roadmapItemsBlock}>
								<div className={styles.roadmapItem}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M17.2559 4.41083C17.5814 4.73626 17.5814 5.2639 17.2559 5.58934L8.08926 14.756C7.76382 15.0814 7.23618 15.0814 6.91074 14.756L2.74408 10.5893C2.41864 10.2639 2.41864 9.73626 2.74408 9.41083C3.06951 9.08539 3.59715 9.08539 3.92259 9.41083L7.5 12.9882L16.0774 4.41083C16.4028 4.08539 16.9305 4.08539 17.2559 4.41083Z"
											fill="white"
										/>
									</svg>
									<div className={styles.roadmapItemTitle}>
										Project Conceptualization
									</div>
								</div>
								<div className={styles.roadmapItem}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M17.2559 4.41083C17.5814 4.73626 17.5814 5.2639 17.2559 5.58934L8.08926 14.756C7.76382 15.0814 7.23618 15.0814 6.91074 14.756L2.74408 10.5893C2.41864 10.2639 2.41864 9.73626 2.74408 9.41083C3.06951 9.08539 3.59715 9.08539 3.92259 9.41083L7.5 12.9882L16.0774 4.41083C16.4028 4.08539 16.9305 4.08539 17.2559 4.41083Z"
											fill="white"
										/>
									</svg>
									<div className={styles.roadmapItemTitle}>
										Team Formation & Marketing Campaigns
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.roadmapBlock}>
						<div className={styles.roadmapBlockTop}>
							<h3 className={styles.roadmapBlockTitle}>Q3 2024</h3>
							<p className={styles.roadmapBlockPhase}>PHASE 2</p>
						</div>
						<div className={styles.roadmapBlockBottom}>
							<div className={styles.roadmapBlockDescription}>
								Audit, Launch and Token
							</div>
							<div className={styles.roadmapItemsBlock}>
								<div className={styles.roadmapItem}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M17.2559 4.41083C17.5814 4.73626 17.5814 5.2639 17.2559 5.58934L8.08926 14.756C7.76382 15.0814 7.23618 15.0814 6.91074 14.756L2.74408 10.5893C2.41864 10.2639 2.41864 9.73626 2.74408 9.41083C3.06951 9.08539 3.59715 9.08539 3.92259 9.41083L7.5 12.9882L16.0774 4.41083C16.4028 4.08539 16.9305 4.08539 17.2559 4.41083Z"
											fill="white"
										/>
									</svg>
									<div className={styles.roadmapItemTitle}>
										Game and Platform Testing & Audit
									</div>
								</div>
								<div className={styles.roadmapItem}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M17.2559 4.41083C17.5814 4.73626 17.5814 5.2639 17.2559 5.58934L8.08926 14.756C7.76382 15.0814 7.23618 15.0814 6.91074 14.756L2.74408 10.5893C2.41864 10.2639 2.41864 9.73626 2.74408 9.41083C3.06951 9.08539 3.59715 9.08539 3.92259 9.41083L7.5 12.9882L16.0774 4.41083C16.4028 4.08539 16.9305 4.08539 17.2559 4.41083Z"
											fill="white"
									
										/>
									</svg>
									<div className={styles.roadmapItemTitle}>
										Full Launch of the Game
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.roadmapBlock}>
						<div className={styles.roadmapBlockTop}>
							<h3 className={styles.roadmapBlockTitle}>Q4 2024</h3>
							<p className={styles.roadmapBlockPhase}>PHASE 3</p>
						</div>
						<div className={styles.roadmapBlockBottom}>
							<div className={styles.roadmapBlockDescription}>
								Further Development
							</div>
							<div className={styles.roadmapItemsBlock}>
								<div className={styles.roadmapItem}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M17.2559 4.41083C17.5814 4.73626 17.5814 5.2639 17.2559 5.58934L8.08926 14.756C7.76382 15.0814 7.23618 15.0814 6.91074 14.756L2.74408 10.5893C2.41864 10.2639 2.41864 9.73626 2.74408 9.41083C3.06951 9.08539 3.59715 9.08539 3.92259 9.41083L7.5 12.9882L16.0774 4.41083C16.4028 4.08539 16.9305 4.08539 17.2559 4.41083Z"
											fill="white"
											fill-opacity="0.4"
										/>
									</svg>
									<div className={styles.roadmapItemTitle}>
										Airdrop, TGE, Listing
									</div>
								</div>
								<div className={styles.roadmapItem}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M17.2559 4.41083C17.5814 4.73626 17.5814 5.2639 17.2559 5.58934L8.08926 14.756C7.76382 15.0814 7.23618 15.0814 6.91074 14.756L2.74408 10.5893C2.41864 10.2639 2.41864 9.73626 2.74408 9.41083C3.06951 9.08539 3.59715 9.08539 3.92259 9.41083L7.5 12.9882L16.0774 4.41083C16.4028 4.08539 16.9305 4.08539 17.2559 4.41083Z"
											fill="white"
											fill-opacity="0.4"
										/>
									</svg>
									<div className={styles.roadmapItemTitle}>
										Ongoing Marketing Campaign & Community Development
									</div>
								</div>
								<div className={styles.roadmapItem}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M17.2559 4.41083C17.5814 4.73626 17.5814 5.2639 17.2559 5.58934L8.08926 14.756C7.76382 15.0814 7.23618 15.0814 6.91074 14.756L2.74408 10.5893C2.41864 10.2639 2.41864 9.73626 2.74408 9.41083C3.06951 9.08539 3.59715 9.08539 3.92259 9.41083L7.5 12.9882L16.0774 4.41083C16.4028 4.08539 16.9305 4.08539 17.2559 4.41083Z"
											fill="white"
											fill-opacity="0.4"
										/>
									</svg>
									<div className={styles.roadmapItemTitle}>
										Continuous Updates and Improvements
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.roadmapBlock}>
						<div className={styles.roadmapBlockTop}>
							<h3 className={styles.roadmapBlockTitle}>Q1 2025</h3>
							<p className={styles.roadmapBlockPhase}>PHASE 4</p>
						</div>
						<div className={styles.roadmapBlockBottom}>
							<div className={styles.roadmapBlockDescription}>
								To Be Announced
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.tokenomics}>
				<div className={styles.sectionTop}>
					<h2 className={styles.sectionTitle}>Tokenomics</h2>
					<p className={styles.sectionDescription}>
						This page describes the Tokenomics approved by the team
					</p>
					<img src={MediumFlower} alt="flower" className={styles.flower3} />
					<img src={MediumFlower} alt="flower" className={styles.flower4} />
				</div>
				<div className={styles.tokenomicsContainer}>
					<div className={styles.tokenomicsTotalAmount}>
						<div className={styles.tokenomicsNumber}>1</div>
						<span className={styles.tokenomicsComma}>,</span>
						<div className={styles.tokenomicsNumber}>0</div>
						<div className={styles.tokenomicsNumber}>0</div>
						<div className={styles.tokenomicsNumber}>0</div>
						<span className={styles.tokenomicsComma}>,</span>
						<div className={styles.tokenomicsNumber}>0</div>
						<div className={styles.tokenomicsNumber}>0</div>
						<div className={styles.tokenomicsNumber}>0</div>
						<span className={styles.tokenomicsComma}>,</span>
						<div className={styles.tokenomicsNumber}>0</div>
						<div className={styles.tokenomicsNumber}>0</div>
						<div className={styles.tokenomicsNumber}>0</div>
					</div>

					<Tokenomics className={styles.tokenomicsGraph} />
					{/*<img
                        src={Tokenomics}
                        alt="tokenomics"
                        className={styles.tokenomicsGraph}
                    />*/}
					<img src={MediumFlower} alt="flower" className={styles.flower5} />
					<TokenomicsMb  />
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default Home;
