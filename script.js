class TrafficLightWithAsync {
    constructor() {
        this.states = ["Green", "Yellow", "Red"];
        this.currentState = "Red";
        this.redLight = document.getElementById("red-light");
        this.yellowLight = document.getElementById("yellow-light");
        this.greenLight = document.getElementById("green-light");
        this.statusDisplay = document.getElementById("status");
        this.updateLights();
    }

    async transition() {
        switch (this.currentState) {
            case "Red":
                await this.handleRedState();
                this.currentState = "Green";
                break;
            case "Green":
                this.currentState = "Yellow";
                break;
            case "Yellow":
                this.currentState = "Red";
                break;
            default:
                throw new Error("Invalid state");
        }
        this.updateLights();
        console.log(`Transitioned to: ${this.currentState}`);
    }

    updateLights() {
        this.redLight.classList.remove("active");
        this.yellowLight.classList.remove("active");
        this.greenLight.classList.remove("active");

        switch (this.currentState) {
            case "Red":
                this.redLight.classList.add("active");
                break;
            case "Yellow":
                this.yellowLight.classList.add("active");
                break;
            case "Green":
                this.greenLight.classList.add("active");
                break;
        }

        this.statusDisplay.textContent = `Status: Current State - ${this.currentState}`;
    }

    async handleRedState() {
        this.statusDisplay.textContent = "Status: Handling Red State... (API call)";
        console.log("Handling Red state asynchronously...");
        
        // Simulate an asynchronous API call
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2 second delay
        console.log("Simulated API call completed.");

        this.statusDisplay.textContent = "Status: API call completed. Transitioning...";
    }

    run() {
        setInterval(() => this.transition(), 3000);
    }
}

// Create a traffic light instance and run it
const trafficLightWithAsync = new TrafficLightWithAsync();
trafficLightWithAsync.run();
    