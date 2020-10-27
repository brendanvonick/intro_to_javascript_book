/*  This occurs because the counter is reassigned the value of 1 in the 'while'
    conditional expression. Because it's not really a conditional and just
    always returns a truthy value, the loop iterates on forever and the
    conditional never evaluates to false. */
