import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea"
import {  useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"


const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  genre: z.string().min(2, {
    message: "Genre must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
 coverImage: z.instanceof(FileList).refine((file) => {return file.length === 1; }, "cover Image is required"),

 file: z.instanceof(FileList).refine((file) => {return file.length === 1;}, "Book PDF is required"),
})


const CreateBook = () => {

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        title:'',
        genre:'',
        description:'',

      }
    });

    const coverImageRef = form.register('coverImage');
    const fileRef = form.register('file');

    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.

      
      console.log(values)
    }
  return (
    <section>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                
         

<div className="flex items-center justify-between">
      <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/dashboard/home">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
    <BreadcrumbLink href="/dashboard/books">Books</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Create</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
<div className="flex items-center gap-2">
<Button variant={"outline"}>
<span>Cancel</span></Button>

<Button type="submit">
<span>Submit</span></Button>

</div>

</div>
<Card className="mt-6">
    <CardHeader>
        <CardTitle>Create a new Book</CardTitle>
        <CardDescription>
Fill out the form below to create a new book.
        </CardDescription>

    </CardHeader>
    <CardContent>
        
        <div className="grid gap-6">
          <FormField control={form.control} name="title"
           render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
              <Input  
                    type="text"
                    className="w-full"
                    {...field}
                      />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
           />




<FormField control={form.control} name="genre"
           render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <FormControl>
              <Input  
                    type="text"
                    className="w-full"
                    {...field}
                      />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
           />


<FormField control={form.control} name="description"
           render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea className="min-h-32" {...field} />
             
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
           />

<FormField control={form.control} name="coverImage"
           render={() => (
            <FormItem>
              <FormLabel>CoverImage</FormLabel>
              <FormControl>
              <Input  
                    type="file"
                    className="w-full"
                    {...coverImageRef}
                      />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
           />

<FormField control={form.control} name="file"
           render={() => (
            <FormItem>
              <FormLabel>Book File</FormLabel>
              <FormControl>
              <Input  
                    type="file"
                    className="w-full"
                    {...fileRef}
                      />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
           />
                    </div>
        

    </CardContent>
</Card>
</form>
</Form>
    </section>
  )
}

export default CreateBook