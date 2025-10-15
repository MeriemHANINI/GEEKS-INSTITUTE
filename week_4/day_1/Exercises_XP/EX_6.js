// Self-invoking function
(function(numChildren, partnerName, location, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    
    // Display in DOM
    const div = document.createElement('div');
    div.textContent = fortune;
    document.body.appendChild(div);
})(2, "Sarah", "Paris", "Web Developer");