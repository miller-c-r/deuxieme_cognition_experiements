file_names <- list.files("posts/Week6/images") 


rio::export(file_names, 'posts/Week6/images/stimuli.js', format ='JSON') 


