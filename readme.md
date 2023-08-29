### Portuguese

1. **Classe `Node`**: Essa classe representa um nó na árvore de Huffman. Cada nó possui um `symbol` (que representa um caractere ou símbolo nos dados) e uma `frequency` (a quantidade de vezes que esse símbolo aparece nos dados). Os nós também podem ter filhos esquerdo e direito, formando uma estrutura de árvore binária.

2. **Função `createFrequency`**: Essa função recebe os dados de entrada (uma string) e cria um mapa de frequência. O mapa de frequência armazena cada símbolo único nos dados como chave e sua frequência correspondente como valor. Por exemplo, se os dados de entrada forem `"exampledata"`, o mapa de frequência pode ser:

```ts
   { 
    'e': 2, 
    'x': 1, 
    'a': 1, 
    'm': 1, 
    'p': 1, 
    'l': 1, 
    'd': 1, 
    't': 1
  }
```

3. **Função `createTree`**: Essa função constrói a árvore de Huffman usando uma fila de prioridade (implementada como um array). Ela itera pelo mapa de frequência e cria nós para cada par símbolo-frequência. Em seguida, ela remove repetidamente os dois nós com as menores frequências da fila de prioridade, combina-os em um novo nó pai e insere o nó pai de volta na fila. Esse processo continua até restar apenas um nó na fila, que se torna a raiz da árvore de Huffman.

4. **Função `createCodes`**: Essa função percorre recursivamente a árvore de Huffman e gera os códigos de Huffman (representações binárias) para cada símbolo. Ela percorre para o filho esquerdo ao encontrar '0' e para o filho direito ao encontrar '1'. O mapa `codes` é preenchido com os códigos de Huffman correspondentes a cada símbolo.

5. **Função `encode`**: Dados os dados originais e os códigos de Huffman, essa função codifica os dados originais em uma string binária usando os códigos de Huffman.

6. **Função `main`**: Nesta função, um exemplo de dado de entrada (`inputData`) é fornecido, e o processo de codificação Huffman é realizado passo a passo. O mapa de frequência é construído, a árvore de Huffman é criada, os códigos de Huffman são gerados e os dados de entrada são codificados usando os códigos de Huffman.

### Matemática

**1. Construção da Árvore de Huffman:**

- **Símbolos e Frequências:** Suponha que temos um conjunto de símbolos $$\(S\)$$ e suas frequências correspondentes $$\(f(s)\)$$, onde $$\(s\)$$ é um símbolo pertencente a $\(S\)$.
- **Probabilidade de Ocorrência:** A probabilidade $$\(p(s)\)$$ de um símbolo $$\(s\)$$ é calculada dividindo sua frequência pela soma de todas as frequências: $$\(p(s) = \frac{f(s)}{\sum\_{s' \in S} f(s')}\)$$.

**2. Cálculo da Entropia:**

- **Entropia:** A entropia de uma fonte de informação é uma medida da incerteza associada à ocorrência dos símbolos. Ela é calculada pela fórmula: $$\(H(S) = -\sum\_{s \in S} p(s) \cdot \log_2(p(s))\)$$.
- A entropia é o valor mínimo de bits médios necessários para representar cada símbolo.

**3. Geração dos Códigos de Huffman:**

- **Comprimento Médio dos Códigos:** O comprimento médio dos códigos de Huffman é calculado pela fórmula: $$\(L(S) = \sum\_{s \in S} p(s) \cdot \text{comprimento}(s)\)$$, onde $$\(\text{comprimento}(s)\)$$ é o comprimento do código de Huffman para o símbolo \(s\).
- **Propriedade Otimizada:** O algoritmo de Huffman busca minimizar o comprimento médio dos códigos, garantindo que símbolos mais frequentes tenham códigos mais curtos.

**4. Algoritmo de Huffman:**

- **Construção da Árvore:** O algoritmo de Huffman começa criando uma lista de nós, cada um representando um símbolo e sua frequência. Ele combina repetidamente os dois nós de menor frequência para criar um novo nó pai com frequência igual à soma das frequências dos filhos.
- **Árvore de Huffman:** A árvore resultante é uma árvore binária, onde as folhas representam símbolos individuais e os nós internos representam frequências acumuladas.
- **Atribuição de Códigos:** Os códigos de Huffman são atribuídos percorrendo a árvore. Cada vez que se move para a esquerda, é acrescentado '0' ao código; cada vez que se move para a direita, é acrescentado '1'.

### English

The provided code implements the Huffman coding algorithm, which is a method for lossless data compression. Let's break down the algorithm step by step:

1. **`Node` Class**: The `Node` class represents a node in the Huffman tree. Each node has a `symbol` (representing a character or symbol in the data) and a `frequency` (the number of times that symbol appears in the data). Nodes can also have left and right children, forming a binary tree structure.

2. **`createFrequency` Function**: This function takes input data (a string) and creates a frequency map. The frequency map stores each unique symbol in the data as a key and its corresponding frequency as the value. For example, if the input data is `"exampledata"`, the frequency map might look like:

```ts
   { 
    'e': 2, 
    'x': 1, 
    'a': 1, 
    'm': 1, 
    'p': 1, 
    'l': 1, 
    'd': 1, 
    't': 1
  }
```

3. **`createTree` Function**: This function constructs the Huffman tree using a priority queue (implemented as an array). It iterates through the frequency map and creates nodes for each symbol-frequency pair. Then, it repeatedly removes the two nodes with the lowest frequencies from the priority queue, combines them into a new parent node, and inserts the parent node back into the queue. This process continues until only one node remains in the queue, which becomes the root of the Huffman tree.

4. **`createCodes` Function**: This function recursively traverses the Huffman tree and generates Huffman codes (binary representations) for each symbol. It traverses to the left child when encountering a '0' and to the right child when encountering a '1'. The `codes` map is filled with each symbol's corresponding Huffman code.

5. **`encodeData` Function**: Given the original data and the Huffman codes, this function encodes the original data into a binary string using the Huffman codes.

6. **`main` Function**: In this function, an example input data (`inputData`) is provided, and the Huffman coding process is carried out step by step. The frequency map is built, the Huffman tree is constructed, Huffman codes are generated, and the input data is encoded using the Huffman codes.

### Mathematics

**1. Construction of the Huffman Tree:**

- **Symbols and Frequencies:** Assume we have a set of symbols $\(S\)$ and their corresponding frequencies $\(f(s)\)$, where $\(s\)$ is a symbol belonging to $$\(S\)$$.
- **Probability of Occurrence:** The probability $$\(p(s)\)$$ of a symbol $$\(s\)$$ is calculated by dividing its frequency by the sum of all frequencies: $$\(p(s) = \frac{f(s)}{\sum\_{s' \in S} f(s')}\)$$.

**2. Calculation of Entropy:**

- **Entropy:** The entropy of an information source is a measure of uncertainty associated with the occurrence of symbols. It is calculated by the formula: $$\(H(S) = -\sum\_{s \in S} p(s) \cdot \log_2(p(s))\)$$.
- Entropy is the minimum average number of bits needed to represent each symbol.

**3. Generation of Huffman Codes:**

- **Average Code Length:** The average code length of Huffman codes is calculated by the formula: $$\(L(S) = \sum\_{s \in S} p(s) \cdot \text{length}(s)\)$$, where $$\(\text{length}(s)\)v is the length of the Huffman code for symbol $$\(s\)$$.
- **Optimized Property:** The Huffman algorithm aims to minimize the average code length, ensuring that more frequent symbols have shorter codes.

**4. Huffman Algorithm:**

- **Tree Construction:** The Huffman algorithm begins by creating a list of nodes, each representing a symbol and its frequency. It repeatedly combines the two nodes with the lowest frequency to create a new parent node with a frequency equal to the sum of the children's frequencies.
- **Huffman Tree:** The resulting tree is a binary tree, where leaves represent individual symbols and internal nodes represent cumulative frequencies.
- **Code Assignment:** Huffman codes are assigned by traversing the tree. Moving left adds '0' to the code, and moving right adds '1' to the code.
