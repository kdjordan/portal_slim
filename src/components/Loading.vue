<template>
	<div class="loader">
		<div class="circle" id="a"></div>
		<div class="circle" id="b"></div>
		<div class="circle" id="c"></div>
	</div>
</template>

<style>
	.loader {
		width: 180px;
		height: 80px;
		margin: auto;
		display: flex;
		border: 1px solid yellow;
		animation: jump 1s linear infinite;
	}
	.circle {
		width: 30px;
		height: 30px;
		background: white;
		border-radius: 50%;
		margin: 0 15px;
	}
	@keyframes jump {
		0% {
			margin-top: 0;
		}
		35% {
			margin-top: -75px;
		}
		70% {
			margin-top: 0px;
		}
	}

	#b {
		animation-delay: 0.2s;
	}
	#c {
		animation-delay: 0.4s;
	}
</style>
