initSidebarItems({"constant":[["SOCKET_BUFFER_SIZE_BYTES","Size of a typical UDP socket buffer."]],"enum":[["State","State of a Subotai node."],["StorageEntry","This is the data type that can be stored and retrieved in the Subotai network, consisting of either another hash or a binary blob."]],"mod":[["receptions","Allows listening to RPCs received by a node. Unnecessary for normal operation, but it can be useful for debugging your network."]],"struct":[["Configuration","Network configuration constants. Do not set these values directly, as there is no way to initialize a node from a `Configuration` struct. Instead, use  `node::Factory` if you want your application to use non-default network constants."],["Factory","Allows the construction of nodes with custom network constants, specific ports, and other options."],["Node","Subotai node."],["NodeInfo","ID - Address pair that identifies a unique Subotai node in the network."]]});