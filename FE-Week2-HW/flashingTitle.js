let showingAlert = false;
const interval = setInterval( () => {
    document.title = showingAlert
    ? 'Cello Central' : 'Front-End Week 1 Coding Assignment';
    showingAlert = ! showingAlert;
}, 1000);

// To stop the alert
// clearInterval(interval); 
// (c) LinkedIn, Mathew Dony 

