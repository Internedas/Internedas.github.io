clear;
% 2
A = [2, 9, 0, 0; 
    0, 4, 1, 4;
    7, 5, 5, 1;
    7, 8, 7,4 ];
b = [-1; 6; 0; 9];
a = [3, -2, 4, -5];
% 3
threea = A*b;
threeb = a + 4;
threec = b * a;
threed = a.*b.';
threee = A.*a.';
%4
AA = A * A;
AtoTwo = A ^ 2;
AtodotTwo = A.^2;
% AtodotTwo is an element wise square
%5
submatrix = A(2:3, : );
%6
x = linsolve(A, b);
ansb = A * x;
