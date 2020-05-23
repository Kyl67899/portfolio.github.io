
	// window.addEventListener("load", function(){
	// 	document.querySelector(".preloader").add("opacity-0");
	// 	setTimeout(function(){
	// 		document.querySelector(".preloader").style.display="none";
	// 	},1000)
	// })


// Portfolio item Filter

	const filterContainer=document.querySelector(".portfolio-filter"),
		
		filterBtns=filterContainer.children,
		
		totalFilterBtn=filterBtns.length,
		
		portfolioItems=document.querySelectorAll(".portfolio-item"),
		
		// console.log(portfolioItems);
		
		totalPortfolioItem=portfolioItems.length;
		
		console.log(totalPortfolioItem);


		// console.log(filterBtns);
		
	for(let i=0; i<totalFilterBtn; i++){
			
		// console.log(filterBtns[i]);
			
		filterBtns[i].addEventListener("click", function(){
				
			// console.log(this.innerHTML)
				
			filterContainer.querySelector(".active").classList.remove("active");
				
			this.classList.add("active");

			const filterValue=this.getAttribute("data-filter");
				
			// console.log(filterValue);
				
			for(let k=0; k<totalPortfolioItem; k++){

				if(filterValue === portfolioItems[k].getAttribute("data-category")){
						
					portfolioItems[k].classList.remove("hide");
						
					portfolioItems[k].classList.add("show");

				}

				else{

					portfolioItems[k].classList.remove("hide");

					portfolioItems[k].classList.add("hide");

				}

				if(filterValue === "all"){

					portfolioItems[k].classList.remove("hide");

					portfolioItems[k].classList.add("hide");
				}
			}

		})
	}


// Portfolio LightBox

	const lightbox=document.querySelector(".lightbox"),

		  lightboxImg=lightbox.querySelector(".lightbox-img"),

		  lightboxClose=lightbox.querySelector(".lightbox-close"),

		  lightboxText=lightbox.querySelector(".caption-text"),

		  lightboxCounter=lightbox.querySelector(".caption-counter");

	let itemIndex=0;

	for(let i=0; i<totalPortfolioItem; i++){

		portfolioItems[i].addEventListener("click", function(){

			// console.log(i);

			itemIndex=i;

			changeItem();

			toggleLightbox();

		})

	}

	function nextItem(){

		if(itemIndex === totalPortfolioItem-1){

			itemIndex=0;
		}

		else{

			itemIndex++
		}

		changeItem();

		// console.log(itemIndex);
	}

	function prevItem(){

		if(itemIndex === 0){
				
			itemIndex = totalPortfolioItem-1;
		}

		else{

			itemIndex--;
		}

		changeItem();
		// console.log(itemIndex);
	}

	function toggleLightbox(){

		lightbox.classList.toggle("open");
	}

	function changeItem(){

		imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
			
		// console.log(imgSrc);

		lightboxImg.src=imgSrc;

		lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
			
		lightboxCounter.innerHTML= ((itemIndex+1) + " of " + totalPortfolioItem)
	}

// close LightBox

	lightbox.addEventListener("click",function(event){

		// console.log(event.target === lightboxClose)

		if(event.target === lightboxClose || event.target === lightbox){

			toggleLightbox();
		}

		// console.log(event.target);
	})

//Aside Navbar

	const nav=document.querySelector(".nav"),

		navList=nav.querySelector("li"),

		totalNavList=navList.length,

		allSection=document.querySelectorAll(".section"),

		totalSection=allSection.length;

	for(let i=0; i<totalNavList; i++){

		const a=navList[i].querySelector("a");

		  a.addEventListener("click", function(){

		  	// remove back section class

			removeBackSectionClass();

			for(let j=0; j<totalNavList; j++){

				if(navList[j].querySelector("a").classList.contains("active")){

					// console.log("back-section" + navList[j].querySelector("a"))

					// add back section class

					addBackSectionClass(j);

					
				}

				navList[j].querySelector("a").classList.remove("active");

			}
			
			// console.log(this);
			
			this.classList.add("active")

			showSection(this);

			if(window.innerWidth < 1200){
				asideSectionTogglerBtn();
			}

		})
	}

	function removeBackSectionClass(){
		for (let i=0; i<totalSection; i++){

			allSection[i].classList.remove("back-section");
		}
	}

	function addBackSectionClass(num){

		allSection[num].classList.add("back-section");
	}

	function showSection(element){

		for (let i=0; i<totalSection; i++){

			allSection[i].classList.remove("active");
		}

		// console.log(element.getAttribute("href").split("#"));

		const target=element.getAttribute("href").split("#")[1];

			  // console.log(target)


	   document.querySelector("#"+target).classList.add("active")
	}


	function updateNav(element){

		for(let i=0; i<totalNavList; i++){

			navList[i].querySelector("a").classList.remove("active");

			const taregt=element.getAttribute("href").split("#")[1];

			if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){

				navList[i].querySelector("a").classList.add("active");
			}
		}

		
	}

    document.querySelector(".hire-me").addEventListener("click", function(){
    	// console.log(this)
    	const sectionIndex=this.getAttribute("data-section-index");

    	console.log(sectionIndex);

    	showSection(this);

    	updateNav(this);

    	removeBackSectionClass();

    	addBackSectionClass(sectionIndex);

    })

	const navTogglerBtn=document.querySelector(".nav-toggler"),
		  aside=document.querySelector(".aside");

	navTogglerBtn.addEventListener("click", asideSectionTogglerBtn)
		// asideSectionTogglerBtn();

	function asideSectionTogglerBtn(){
		aside.classList.toggle("open");
		navTogglerBtn.classList.toggle("open");
		for (let i=0; i<totalSection; i++){

			allSection[i].classList.toggle("open");
		}
	}