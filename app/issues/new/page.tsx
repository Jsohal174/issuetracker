'use client'
import SimpleMDE from "react-simplemde-editor";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { Button, Callout, Spinner, Text, TextArea, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { issueSchema } from "@/app/validationSchemas";
import {z} from 'zod'
import ErrorMessage from "@/app/components/ErrorMessage";


type Issueform = z.infer<typeof issueSchema>

const Page = () => {

  // this will help us take the user back to the issue page
  const router = useRouter()
  const [error, setError] = useState('')
  const [isSubmitted, setSubmitted] = useState(false)
  // useForm is used to create a new react hook so that we can track data without complicated code
  // for client side rendering we are using zod resolver check docs for more info to get back to later
  // form state can grab a lot of stuff here we are only using errors 
  const {register, control , handleSubmit, formState: { errors }} =  useForm<Issueform>({resolver: zodResolver(issueSchema)},)

  return (

    <div className="max-w-96 space-y-3">
      {error && <Callout.Root color="red"><Callout.Text>{error}</Callout.Text></Callout.Root>}
      <form className='space-y-3' onSubmit={ handleSubmit(async (data)=> {

        try {
          setSubmitted(true)
          await axios.post('/api/issues', data);
          router.push('/issues')
        } catch (error) {
          // this error we catch we can use to understand the problem of the client and return it
          setError('An unexpected error has occured')
        }
      })}>

        {/* {...register('title') is the way of passing the name of thing we want to keep track of  */}
        <TextField.Root placeholder='Title' radius='medium' {...register('title')}>
        </TextField.Root>

        {/* so if there is a error with the title we basically show it using Text which is radix component */}
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

        {/* Since simple mde does not allow direct passing of {} we used a controller */}
        <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE placeholder='Description' {...field} />}
        />

        {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}

        <Button disabled={isSubmitted}>Submit new issue {isSubmitted && <Spinner></Spinner>} </Button>
      </form>
    </div>
  )
}

export default Page
