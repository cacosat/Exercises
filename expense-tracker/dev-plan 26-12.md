��#   B a c k e n d   I m p l e m e n t a t i o n 
 
 
 
 1 .   I n i t i a l i z e   N o d e . j s   p r o j e c t 
 
       -   n p m   i n i t 
 
       -   I n s t a l l   d e p e n d e n c i e s :   e x p r e s s ,   p g / m y s q l ,   d o t e n v 
 
 
 
 2 .   S e t   u p   E x p r e s s   s e r v e r 
 
       -   I n i t i a l i z e   E x p r e s s   a p p 
 
       -   D e f i n e   m i d d l e w a r e   ( e . g . ,   b o d y - p a r s e r   f o r   J S O N ) 
 
 
 
 3 .   C o n n e c t   t o   S Q L   d a t a b a s e 
 
       -   U s e   p g / m y s q l   t o   c o n n e c t   t o   t h e   d a t a b a s e 
 
       -   C o n f i g u r e   c o n n e c t i o n   w i t h   e n v i r o n m e n t   v a r i a b l e s 
 
 
 
 4 .   D e f i n e   d a t a b a s e   s c h e m a 
 
       -   W r i t e   S Q L   f o r   c r e a t i n g   ` c a t e g o r i e s `   t a b l e 
 
       -   W r i t e   S Q L   f o r   c r e a t i n g   ` e x p e n s e s `   t a b l e 
 
 
 
 5 .   A P I   E n d p o i n t s 
 
       -   P O S T   / c a t e g o r i e s   t o   a d d   a   n e w   c a t e g o r y 
 
           -   V a l i d a t e   i n p u t 
 
           -   I n s e r t   i n t o   ` c a t e g o r i e s `   t a b l e 
 
       -   G E T   / c a t e g o r i e s   t o   g e t   a l l   c a t e g o r i e s 
 
           -   S e l e c t   f r o m   ` c a t e g o r i e s `   t a b l e 
 
       -   P O S T   / e x p e n s e s   t o   l o g   a   n e w   e x p e n s e 
 
           -   V a l i d a t e   i n p u t 
 
           -   I n s e r t   i n t o   ` e x p e n s e s `   t a b l e 
 
       -   G E T   / e x p e n s e s   t o   g e t   e x p e n s e s   ( w i t h   o p t i o n a l   c a t e g o r y   f i l t e r ) 
 
           -   S e l e c t   f r o m   ` e x p e n s e s `   t a b l e ,   p o s s i b l y   w i t h   J O I N   t o   ` c a t e g o r i e s ` 
 
       -   P U T   / c a t e g o r i e s / : i d   a n d   / e x p e n s e s / : i d   t o   u p d a t e   r e c o r d s 
 
           -   V a l i d a t e   i n p u t   a n d   I D 
 
           -   U p d a t e   t h e   r e s p e c t i v e   t a b l e 
 
       -   D E L E T E   / c a t e g o r i e s / : i d   a n d   / e x p e n s e s / : i d   t o   d e l e t e   r e c o r d s 
 
           -   D e l e t e   f r o m   t h e   r e s p e c t i v e   t a b l e 
 
 
 
 6 .   E r r o r   H a n d l i n g 
 
       -   C a t c h   d a t a b a s e   e r r o r s   a n d   r e s p o n d   w i t h   a p p r o p r i a t e   s t a t u s   c o d e s 
 
       -   V a l i d a t e   i n c o m i n g   d a t a   t o   p r e v e n t   S Q L   i n j e c t i o n 
 
 
 
 7 .   T e s t i n g 
 
       -   W r i t e   t e s t s   f o r   e a c h   e n d p o i n t   u s i n g   a   t e s t i n g   f r a m e w o r k 
 
 