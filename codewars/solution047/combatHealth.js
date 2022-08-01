function combat(health, damage) {
    // Write your code here
    let currentHealth = health - damage
    
    if (currentHealth < 0){
      return 0;
    }
    else{
      return currentHealth;
    }
  }