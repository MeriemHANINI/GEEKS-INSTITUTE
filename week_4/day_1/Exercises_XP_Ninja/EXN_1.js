// FILE.JS - Implémentation complète d'une file
class Queue {
    constructor() {
      this.items = [];
      this.front = 0;
      this.rear = 0;
    }
    
    // Ajouter un élément (enqueue)
    enqueue(element) {
      this.items[this.rear] = element;
      this.rear++;
      console.log(`✓ ${element} ajouté à la file`);
      return element;
    }
    
    // Retirer un élément (dequeue)
    dequeue() {
      if (this.isEmpty()) {
        console.log("✗ Impossible de retirer : file vide");
        return null;
      }
      const removedElement = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      console.log(`↳ ${removedElement} retiré de la file`);
      return removedElement;
    }
    
    // Voir le premier élément
    peek() {
      if (this.isEmpty()) {
        console.log("File vide - aucun élément à voir");
        return null;
      }
      const firstElement = this.items[this.front];
      console.log(`👁 Premier élément: ${firstElement}`);
      return firstElement;
    }
    
    // Vérifier si vide
    isEmpty() {
      return this.front === this.rear;
    }
    
    // Taille
    size() {
      return this.rear - this.front;
    }
    
    // Afficher la file
    print() {
      if (this.isEmpty()) {
        console.log("📭 File vide");
        return;
      }
      const elements = [];
      for (let i = this.front; i < this.rear; i++) {
        elements.push(this.items[i]);
      }
      console.log(`📋 File (${this.size()} éléments): ${elements.join(" <- ")}`);
    }
    
    // Vider
    clear() {
      this.items = [];
      this.front = 0;
      this.rear = 0;
      console.log("🧹 File vidée");
    }
    
    // Statistiques
    stats() {
      console.log("📊 Statistiques de la file:");
      console.log(`   - Taille: ${this.size()}`);
      console.log(`   - Est vide: ${this.isEmpty()}`);
      console.log(`   - Premier élément: ${this.isEmpty() ? 'Aucun' : this.peek()}`);
    }
  }
  
  // ============================================================================
  // PROGRAMME DE TEST
  // ============================================================================
  
  function testQueue() {
    console.log("=".repeat(50));
    console.log("🧪 TEST DE LA FILE (QUEUE)");
    console.log("=".repeat(50));
    
    // Création d'une file
    const file = new Queue();
    
    // Test 1: File vide
    console.log("\n1. TEST FILE VIDE");
    file.print();
    file.stats();
    file.dequeue();
    file.peek();
    
    // Test 2: Ajout d'éléments
    console.log("\n2. AJOUT D'ÉLÉMENTS");
    file.enqueue("Client 1");
    file.enqueue("Client 2");
    file.enqueue("Client 3");
    file.enqueue("Client 4");
    file.print();
    
    // Test 3: Retrait d'éléments
    console.log("\n3. RETRAIT D'ÉLÉMENTS");
    file.dequeue();
    file.dequeue();
    file.print();
    
    // Test 4: Voir le premier élément
    console.log("\n4. CONSULTATION");
    file.peek();
    file.stats();
    
    // Test 5: Ajout après retrait
    console.log("\n5. AJOUT SUPPLÉMENTAIRE");
    file.enqueue("Client 5");
    file.enqueue("Client 6");
    file.print();
    
    // Test 6: Vider la file
    console.log("\n6. VIDAGE DE LA FILE");
    while (!file.isEmpty()) {
      file.dequeue();
    }
    file.print();
    file.stats();
    
    // Test 7: Scénario réel (file d'attente)
    console.log("\n7. SCÉNARIO RÉEL - FILE D'ATTENTE BANQUE");
    const banque = new Queue();
    
    banque.enqueue("Madame Dupont");
    banque.enqueue("Monsieur Martin");
    banque.enqueue("Mademoiselle Leroy");
    
    console.log("\nÉtat de la file d'attente:");
    banque.print();
    
    console.log("\nGuichet 1 appelle:", banque.dequeue());
    console.log("Guichet 2 appelle:", banque.dequeue());
    
    banque.enqueue("Monsieur Bernard");
    
    console.log("\nÉtat final:");
    banque.print();
  }
  
  // ============================================================================
  // FONCTIONS UTILITAIRES
  // ============================================================================
  
  // Fonction pour simuler un traitement par lot
  function processBatch(queue, batchSize) {
    console.log(`\n🔄 TRAITEMENT PAR LOT (${batchSize} éléments)`);
    let processed = 0;
    
    for (let i = 0; i < batchSize && !queue.isEmpty(); i++) {
      const element = queue.dequeue();
      if (element) {
        processed++;
        console.log(`   Traitement ${i + 1}: ${element}`);
      }
    }
    
    console.log(`✓ ${processed} éléments traités`);
    return processed;
  }
  
  // Fonction de démonstration
  function demonstration() {
    console.log("\n" + "=".repeat(50));
    console.log("🎭 DÉMONSTRATION AVANCÉE");
    console.log("=".repeat(50));
    
    const demoQueue = new Queue();
    
    // Ajout multiple
    const elements = ["Tâche A", "Tâche B", "Tâche C", "Tâche D", "Tâche E"];
    elements.forEach(el => demoQueue.enqueue(el));
    
    demoQueue.print();
    demoQueue.stats();
    
    // Traitement par lot
    processBatch(demoQueue, 3);
    demoQueue.print();
    
    // Ajout après traitement
    demoQueue.enqueue("Tâche F");
    demoQueue.enqueue("Tâche G");
    demoQueue.print();
    
    // Traitement du reste
    processBatch(demoQueue, 5);
    demoQueue.stats();
  }
  
  // ============================================================================
  // EXÉCUTION DU PROGRAMME
  // ============================================================================
  
  // Lancer les tests
  testQueue();
  
  // Lancer la démonstration
  demonstration();
  
  // Exemple d'export pour Node.js
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Queue, QueueOptimized };
  }