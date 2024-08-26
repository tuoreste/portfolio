document.addEventListener("DOMContentLoaded", () => {
	const coverCheckbox = document.getElementById("checkbox-cover");
	const pageCheckboxes = document.querySelectorAll(".checkbox-page");
	const dots = document.getElementById("dots");
	const moreText = document.getElementById("more");
	const content = document.querySelector(".content");

	const toggleText = () => {
		const isDotsHidden = dots.style.display === "none";
		dots.style.display = isDotsHidden ? "inline" : "none";
		moreText.style.display = isDotsHidden ? "none" : "inline";
	};

	const handleOutsideClick = (event) => {
		if (content && !content.contains(event.target) && moreText.style.display === "inline") {
			toggleText();
		}
	};

	if (coverCheckbox) {
		coverCheckbox.addEventListener("change", () => {
			if (!coverCheckbox.checked) {
				pageCheckboxes.forEach(checkbox => checkbox.checked = false);
			}
		});
	}

	if (dots) dots.addEventListener("click", toggleText);
	if (moreText) moreText.addEventListener("click", toggleText);
	document.addEventListener("click", handleOutsideClick);

	// Word Shuffling and Positioning
	// const words = ["Innovation", "Creativity", "Success", "Teamwork", "Growth", "Learning", "Strategy", "Passion", "Teamwork", "Growth", "Learning", "Strategy", "Passion"];

	const words = ["ft_isalnum","ft_isalpha","ft_isascii","ft_isdigit","ft_isprint","ft_tolower","ft_toupper","ft_atoi","ft_itoa","ft_putchar_fd","ft_putendl_fd","ft_putnbr_fd","ft_putstr_fd","ft_lstadd_back","ft_lstadd_front","ft_lstclear","ft_lstdelone","ft_lstiter","ft_lstlast","ft_lstmap","ft_lstnew","ft_lstsize","ft_bzero","ft_calloc","ft_memchr","ft_memcmp","ft_memcpy","ft_memmove","ft_memset","ft_strdup","ft_split","ft_strchr","ft_striteri","ft_strjoin","ft_strlcat","ft_strlcpy","ft_strlen","ft_strmapi","ft_strncmp","ft_strnstr","ft_strrchr","ft_strtrim","ft_substr"]
	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const generateWordPositions = (radius, words) => {
		const angleIncrement = (2 * Math.PI) / words.length; // Evenly distribute the words
		return words.map((word, index) => {
			const angle = index * angleIncrement;
			const x = radius * Math.cos(angle);
			const y = radius * Math.sin(angle);
			return { word, x, y };
		});
	};

	const circle = document.getElementById("circle");
	if (circle) {
		const radius = circle.offsetWidth / 2 - 170; // Adjust radius to avoid overflow
		circle.innerHTML = '';

		const wordPositions = generateWordPositions(radius, shuffleArray(words));

		wordPositions.forEach(({ word, x, y }) => {
			const wordElement = document.createElement("div");
			wordElement.className = "word";
			wordElement.style.position = "absolute";
			wordElement.style.left = `50%`; // Center horizontally
			wordElement.style.top = `50%`; // Center vertically
			const rotation = Math.random() * 360; // Random rotation for each word
			wordElement.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg)`;
			wordElement.style.transformOrigin = "center";
			wordElement.textContent = word;
			circle.appendChild(wordElement);
		});
	}
});
