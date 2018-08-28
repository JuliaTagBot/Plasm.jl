var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#LinearAlgebraicRepresentation.jl-1",
    "page": "Home",
    "title": "LinearAlgebraicRepresentation.jl",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Dependencies-1",
    "page": "Home",
    "title": "Dependencies",
    "category": "section",
    "text": "LARVIEW.jl has one Julia dependency and one Python dependency:LinearAlgebraicRepresentation\nPyplasm"
},

{
    "location": "index.html#Docstrings-conventions-1",
    "page": "Home",
    "title": "Docstrings conventions",
    "category": "section",
    "text": "Bold is used to point out theory concepts. For example, look at the  \"2-skeletons\" word in the docstring of LinearAlgebraicRepresentation.skel_merge:cuboidGrid(shape::Array{Int64,1}[, full=false])::Union{LAR,LAR_Model}Monospace is used for everything code related. Look e.g. at \"Points\",  \"Cells\" and \"Hpc\" in the definition docstring of mkpol:mkpol(verts::Points, cells::Cells)::Hpcnote: Note\nIn Julia REPL the monospace text is the one colored differently. In a terminal you will see something like:   (Image: Julia REPL monospace exaple)"
},

{
    "location": "larview.html#",
    "page": "Visualization",
    "title": "Visualization",
    "category": "page",
    "text": ""
},

{
    "location": "larview.html#Viewing-cellular-complexes-1",
    "page": "Visualization",
    "title": "Viewing cellular complexes",
    "category": "section",
    "text": ""
},

{
    "location": "larview.html#Introduction-1",
    "page": "Visualization",
    "title": "Introduction",
    "category": "section",
    "text": "Visualization of geometric and/or topological data is a must for a project that concerns geometric modeling, numerical simulations, and/or graphics rendering of simulation results. The LARVIEW.jl package provides visualization services to LinearAlgebraicRepresentation.jl, the julia ongoing implementation of the LAR (Linear Algebraic Representation) scheme for solid and geometric modeling, well-based on linear algebra and algebraic concepts of cellular and chain complexes.  LinearAlgebraicRepresentation is implemented using only dense and sparse arrays, and without need of fancy complicated data structures that are usual for non-manifold solid modeling. LAR has a large semantic coverage,  including geometric and topological modeling, domain modeling for physical simulations, geographical mapping, computer graphics, computer vision and robotics.Visualization of data structures generated by the Julia package LinearAlgebraicRepresentation are currently produced by making use of the Python package pyplasm, the current implementation of the geometric language PLaSM (Programming LAnguage for Solid Modeling). See the Wiley\'s book  Geometric Programming for Computer-Aided Design for more information.(Image: )Figure 1: Visualization of the LinearAlgebraicRepresentation.jl model refectory of type Struct, obtained by hirarchical aggregation of two cellular complexes table and chair."
},

{
    "location": "larview.html#Types-for-data-and-viewing-operations-1",
    "page": "Visualization",
    "title": "Types for data and viewing operations",
    "category": "section",
    "text": "To get a proper view of data types used by LARVIEW and LinearAlgebraicRepresentation packages, look at the Glossary document."
},

{
    "location": "larview.html#List-of-currently-available-primitives-1",
    "page": "Visualization",
    "title": "List of currently available primitives",
    "category": "section",
    "text": "The functions of the package can be classified in three subsets.   The first group contains functions to return Python lists of either Cells or Points, according to the pyplasm semantics;cells2py(cells::Cells)::PyObject\n\npoints2py(V::Points)::PyObject\n\nmkpol(verts::Points, cells::Cells)::HpcThe second one is the set of method implementations for the view function, that either directly displays a Hpc object, or generates and displays this argument starting from different combinations of LARVIEW and LinearAlgebraicRepresentation types;view(hpc::Hpc)\n\nview(V::Points, CV::Cells)\n\nview(model::LAR_Model)\n\nview(pair::Tuple{Points,Cells})The third group generates an Hpc object, to be subsequently displayed by some view call.hpc_exploded( model::LAR_Model)(sx=1.2, sy=1.2, sz=1.2)::Hpc\n\nlar2hpc(V::Points, CV::Cells)::Hpc\n\nlar2hpc(model::LAR_Model)::Hpc\n\nlar2exploded_hpc(V::Points,CV::Cells)::HpcAnother set of methods will be dedicated to display cell indices of various cell complexes, using different colors for each Cells object, but it was not yet been ported to Julia."
},

{
    "location": "larview.html#Examples-1",
    "page": "Visualization",
    "title": "Examples",
    "category": "section",
    "text": "(Image: )Figure 2: Visualization of cellular 2- and 3-complexes generated by LinearAlgebraicRepresentation.jl package: (a) 2D disk; (b) cylinder surface in 3D; (c) 2-sphere surface in 3D; (3) toroidal surface in 3D."
},

{
    "location": "larview.html#Base.view",
    "page": "Visualization",
    "title": "Base.view",
    "category": "function",
    "text": "view(A, inds...)\n\nLike getindex, but returns a view into the parent array A with the given indices instead of making a copy.  Calling getindex or setindex! on the returned SubArray computes the indices to the parent array on the fly without checking bounds.\n\njulia> A = [1 2; 3 4]\n2×2 Array{Int64,2}:\n 1  2\n 3  4\n\njulia> b = view(A, :, 1)\n2-element SubArray{Int64,1,Array{Int64,2},Tuple{Base.Slice{Base.OneTo{Int64}},Int64},true}:\n 1\n 3\n\njulia> fill!(b, 0)\n2-element SubArray{Int64,1,Array{Int64,2},Tuple{Base.Slice{Base.OneTo{Int64}},Int64},true}:\n 0\n 0\n\njulia> A # Note A has changed even though we modified b\n2×2 Array{Int64,2}:\n 0  2\n 0  4\n\n\n\nview(hpc::Hpc)\n\nBase.view extension.  Display a Python  HPC (Hierarchica Polyhedral Complex) object using  the PyPlasm viewer, written in C++ with OpenGL and acceleration algorithms  for big geometric data structures. \n\nExample\n\njulia> m = LinearAlgebraicRepresentation.cuboidGrid([2,2],true)\n([0.0 0.0 … 2.0 2.0; 0.0 1.0 … 1.0 2.0], Array{Array{Int64,1},1}[Array{Int64,1}[[1], \n[2], [3], [4], [5], [6], [7], [8], [9]], Array{Int64,1}[[1, 2], [2, 3], [4, 5], [5, \n6], [7, 8], [8, 9], [1, 4], [2, 5], [3, 6], [4, 7], [5, 8], [6, 9]], \nArray{Int64,1}[[1, 2, 4, 5], [2, 3, 5, 6], [4, 5, 7, 8], [5, 6, 8, 9]]])\n\njulia> hpc = LARVIEW.mkpol(m[1],m[2][2])\nPyObject <pyplasm.xgepy.Hpc; proxy of <Swig Object of type \'std::shared_ptr< Hpc > *\' \nat 0x140d6c780> >\n\njulia> LARVIEW.view(hpc)\n\n\n\nview(V::Points, CV::Cells)\n\nBase.view extension.  Display a Python  HPC (Hierarchica Polyhedral Complex) object using  the PyPlasm viewer, written in C++ with OpenGL and acceleration algorithms  for big geometric data structures. Input parameters are of Points and Cells type.\n\nExample\n\njulia> V,(VV,EV,FV,CV) = LinearAlgebraicRepresentation.cuboid([1,1,1],true);\n\njulia> LARVIEW.mkpol(V,EV)\nPyObject <pyplasm.xgepy.Hpc; proxy of <Swig Object of type \n\'std::shared_ptr< Hpc > *\' at 0x12cf45d50> >\n\njulia> \nLARVIEW.view(LARVIEW.mkpol(V,EV))	\n[...]\n\n\n\nview(model::LARmodel)\n\nBase.view extension.  Display a Python  HPC (Hierarchica Polyhedral Complex) object using  the PyPlasm viewer, written in C++ with OpenGL and acceleration algorithms  for big geometric data structures. The input is a LARmodel object.\n\nExample\n\njulia> typeof( LinearAlgebraicRepresentation.cuboid([1,1,1], true) )\nTuple{Array{Float64,2},Array{Array{Int64,1},1}}\n\njulia> LARVIEW.view( LinearAlgebraicRepresentation.cuboid([1,1,1], true) )\n\n\n\nview(pair::Tuple{Points,Cells})\n\nBase.view extension.  Display a Python  HPC (Hierarchica Polyhedral Complex) object using  the PyPlasm viewer, written in C++ with OpenGL and acceleration algorithms  for big geometric data structures. The input is a pair of type  Tuple{Points,Cells}.\n\nExample\n\njulia> typeof(LinearAlgebraicRepresentation.cuboid([1,1,1])::LAR)\nTuple{Array{Float64,2},Array{Array{Int64,1},1}}\n	\njulia> LARVIEW.view(LinearAlgebraicRepresentation.cuboid([1,1,1]))\n\n\n\nview(obj::LinearAlgebraicRepresentation.Struct)\n\nDisplay a geometric value of Struct type, via conversion to LAR and then to Hpc values. \n\nExample\n\ncube = LinearAlgebraicRepresentation.apply( LinearAlgebraicRepresentation.t(-.5,-.5,0), LinearAlgebraicRepresentation.cuboid([1,1,1]));\ntableTop = LinearAlgebraicRepresentation.Struct([ LinearAlgebraicRepresentation.t(0,0,.85), LinearAlgebraicRepresentation.s(1,1,.05), cube ]);\ntableLeg = LinearAlgebraicRepresentation.Struct([ LinearAlgebraicRepresentation.t(-.475,-.475,0), LinearAlgebraicRepresentation.s(.1,.1,.89), cube ]);\ntablelegs = LinearAlgebraicRepresentation.Struct( repeat([ tableLeg, LinearAlgebraicRepresentation.r(0,0,pi/2) ],outer=4) );\ntable = LinearAlgebraicRepresentation.Struct([ tableTop, tablelegs ]);\n\nLARVIEW.view(table)\n\n\n\nview(scene::Array{Any,1})\n\nDisplay a geometric scene, defined as Array{Any,1} of geometric objects defined in the same coordinate system, i.e. in World Coordinates.\n\nExample\n\nA hierarchical scene defined in Local Coordinates as value of Struct type,  must be converted to Array{Any,1} by the expression \n\n`evalStruct(scene::Struct)::Array{Any,1}`\n\n\n\n"
},

{
    "location": "larview.html#LARVIEW.hpc_exploded",
    "page": "Visualization",
    "title": "LARVIEW.hpc_exploded",
    "category": "function",
    "text": "hpc_exploded( model::LARmodel )( sx=1.2, sy=1.2, sz=1.2 )::Hpc\n\nConvert a LARmodel into a Hpc object, after exploding all-dimensional cells with  scale sx,sy,sz parameters. Every cell is translated by the vector difference  between its scaled centroid and its centroid. Every cell is transformed in a  single LAR object before explosion.\n\nExample\n\njulia> hpc = LARVIEW.hpc_exploded(LinearAlgebraicRepresentation.cuboidGrid([1,2,3], true))(1.5,1.5,1.5)\n\njulia> view(hpc)\n\n\n\n"
},

{
    "location": "larview.html#Main-Interface-1",
    "page": "Visualization",
    "title": "Main Interface",
    "category": "section",
    "text": "LARVIEW.viewLARVIEW.hpc_exploded"
},

{
    "location": "numbering.html#",
    "page": "Numbering",
    "title": "Numbering",
    "category": "page",
    "text": ""
},

{
    "location": "numbering.html#Graphic-text-1",
    "page": "Numbering",
    "title": "Graphic text",
    "category": "section",
    "text": "A standard model for vector graphics was established by the GKS (Graphical Kernel System) ISO standard, very diffused in years 80\' and 90\' on personal computers and UNIX workstations. Later, it evolved into vector imaging on the web, soon normalized as SVG (Scalable Vector Graphics) W3C standard. In this package we provide a vector text  primitive, where any textual string is transformed, using the LAR scheme, into a 1D cellular complex embedded either in 2D or in 3D. Such approach allows for immediate annotation of models with information useful to the development and testing of complex geometric algorithms, and in particular of the Boolean operations. The used vector font, originally designed and implemented in PLaSM language (a geometric extension of Backus\' FL) for the book Geometric Programming for Computer-Aided Design (Wiley, 2003), has been ported to native Julia, by implementing each printable ASCII character (codes 32-126) as a LAR model, and providing primitives to translate every textual string into one or more such data structures. For example, the \"PLaSM\" string is transformed into the 1D complex julia> LARVIEW.text(\"PLaSM\")\n# output\n([0.0 0.0 3.0 4.0 4.0 3.0 0.0 9.0 5.0 5.0 14.0 13.0 11.0 10.0 10.0 \n11.0 13.0 14.0 14.0 14.0 15.0 16.0 18.0 19.0 19.0 18.0 16.0 15.0 15.0 16.0 18.0 19.0 \n20.0 20.0 22.0 24.0 24.0; 0.0 6.0 6.0 5.0 3.0 2.0 2.0 0.0 0.0 6.0 1.0 0.0 0.0 1.0 \n2.0 3.0 3.0 2.0 0.0 3.0 1.0 0.0 0.0 1.0 2.0 3.0 3.0 4.0 5.0 6.0 6.0 5.0 0.0 6.0 4.0 \n6.0 0.0], Array{Int64,1}[[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [8, 9], \n[9, 10], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 18], [18, 11], \n[19, 20], [21, 22], [22, 23], [23, 24], [24, 25], [25, 26], [26, 27], [27, 28], [28, 29], \n[29, 30], [30, 31], [31, 32], [33, 34], [34, 35], [35, 36], [36, 37]])"
},

{
    "location": "numbering.html#Vector-graphics-for-model-annotations-1",
    "page": "Numbering",
    "title": "Vector graphics for model annotations",
    "category": "section",
    "text": "A developer of geometric models or algorithms may need to annotate her work with textual data, and in particular to annotate the various dimensional cells of a cellular complex with their ordinal number. A 2D example is given in the above Figure. Other examples are given below.(Image: )Figure 1: Visualization of a 2D cellular complex, and numbering of its cells with different colors, depending on their dimension. It may be interesting to notice that the topology of the complex is fully specified by the LAR model (V,EV) of vertices and edges.The geometry of 2D faces can be computed – as a minimal basis of cycles (chains without boundaries) – by the arrangement algorithms given in the companion package LinearAlgebraicRepresentation.jl."
},

{
    "location": "numbering.html#Numbering-cellular-complexes-1",
    "page": "Numbering",
    "title": "Numbering cellular complexes",
    "category": "section",
    "text": "To get a proper view of data types used by LARVIEW and LinearAlgebraicRepresentation packages, look at the Glossary document.Another set of methods will be dedicated to display cell indices of various cell complexes, using different colors for each Cells object, but it was not yet been ported to Julia."
},

{
    "location": "numbering.html#Examples-1",
    "page": "Numbering",
    "title": "Examples",
    "category": "section",
    "text": "(Image: )Figure 2: Visualization of cellular 2- and 3-complexes generated by LinearAlgebraicRepresentation package: (a) 2D disk; (b) cylinder surface in 3D; (c) 2-sphere surface in 3D; (3) toroidal surface in 3D."
},

{
    "location": "numbering.html#LARVIEW.numbering",
    "page": "Numbering",
    "title": "LARVIEW.numbering",
    "category": "function",
    "text": "numbering(model::LARmodel)\n\nDisplay a wireframe of model cells, of any dimension, with their ordinal number. Different colors and size are used for the various dimensional cells.\n\nExamples\n\nmodel = LinearAlgebraicRepresentation.cuboidGrid([3,4,2], true)\nLARVIEW.view(LARVIEW.numbering()(model)) \n\nmodel = LinearAlgebraicRepresentation.cuboidGrid([10,10], true)\nLARVIEW.view(LARVIEW.numbering(1.5)(model))\n\n\n\n"
},

{
    "location": "numbering.html#Main-Interface-1",
    "page": "Numbering",
    "title": "Main Interface",
    "category": "section",
    "text": "LARVIEW.numbering"
},

{
    "location": "glossary.html#",
    "page": "Glossary",
    "title": "Glossary",
    "category": "page",
    "text": ""
},

{
    "location": "glossary.html#Glossary-of-types-1",
    "page": "Glossary",
    "title": "Glossary of types",
    "category": "section",
    "text": ""
},

{
    "location": "glossary.html#Points-1",
    "page": "Glossary",
    "title": "Points",
    "category": "section",
    "text": "Alias declation of LAR-specific data structure. Dense Matrix Mtimes N to store the position of vertices (0-cells) of a cellular complex. The number of rows M is the dimension  of the embedding space. The number of columns N is the number of 0-cells."
},

{
    "location": "glossary.html#Cells-1",
    "page": "Glossary",
    "title": "Cells",
    "category": "section",
    "text": "Alias declation of LAR-specific data structure. Dense Array of Array to store the indices of vertices of P-cells of a cellular complex.  The linear space of P-chains is generated by Cells as a basis. Simplicial P-chains have P+1 vertex indices for cell element in Cells array. Cuboidal P-chains have 2^P vertex indices for cell element in Cells array. Other types of chain spaces may have different numbers of vertex indices for cell  element in Cells array."
},

{
    "location": "glossary.html#Chain-1",
    "page": "Glossary",
    "title": "Chain",
    "category": "section",
    "text": "Alias declation of LAR-specific data structure. Binary SparseVector to store the coordinates of a chain of N-cells. It is nnz=1 with value=1 for the coordinates of an elementary N-chain, constituted by  a single N-chain."
},

{
    "location": "glossary.html#ChainOp-1",
    "page": "Glossary",
    "title": "ChainOp",
    "category": "section",
    "text": "Alias declation of LAR-specific data structure.  SparseMatrix in Compressed Sparse Column format, contains the coordinate  representation of an operator between linear spaces of p-chains.  Operators p-Boundary p-Chain -> (p-1)-Chain and p-Coboundary p-Chain -> (p+1)-Chain are typically stored as  ChainOp with elements in -101 or in 01, for  signed and unsigned operators, respectively."
},

{
    "location": "glossary.html#ChainComplex-1",
    "page": "Glossary",
    "title": "ChainComplex",
    "category": "section",
    "text": "Alias declation of LAR-specific data structure. It is a  1-dimensional Array of ChainOp that provides storage for either the  chain of boundaries (from D to 0) or the transposed chain of coboundaries  (from 0 to D), with D the dimension of the embedding space, which may be either  R^2 or R^3."
},

{
    "location": "glossary.html#LAR_Model-1",
    "page": "Glossary",
    "title": "LAR_Model",
    "category": "section",
    "text": "Alias declation of LAR-specific data structure. LAR_Model is a pair (Geometry, Topology), where Geometry is stored as  Points, and Topology is stored as Array of Cells. The number of differents  Cells objects (i.e. Skeletons) of a n-dimensional cellular complex goes from 0 to n."
},

{
    "location": "glossary.html#LAR-1",
    "page": "Glossary",
    "title": "LAR",
    "category": "section",
    "text": "Alias declation of LAR-specific data structure. LAR_Model is a pair (Geometry, Topology), where Geometry is stored as  Points, and Topology asCells. "
},

{
    "location": "glossary.html#Hpc-1",
    "page": "Glossary",
    "title": "Hpc",
    "category": "section",
    "text": "Alias declation of LAR-specific data structure.  Hpc stands for Hierarchical Polyhedral Complex and is the geometric data structure  used by PLaSM (Programming LAnguage for Solid Modeling). See the Wiley\'s book  Geometric Programming for Computer-Aided Design and its  current Python library https://github.com/plasm-language/pyplasm."
},

]}
