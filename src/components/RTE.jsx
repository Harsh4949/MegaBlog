import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="tzpnyuys1dkghzh4outob5zkhcx2udnmjwps4yz163jh0uk3" // 🔑 Your actual TinyMCE Cloud API Key
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                // Add all desired plugins here
                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media',
                'searchreplace', 'table', 'visualblocks', 'wordcount', 'checklist', 'mediaembed', 'casechange',
                'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste',
                'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments',
                'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
                'importword', 'exportword', 'exportpdf'
              ],
              toolbar:
                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | ' +
                'addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist ' +
                'indent outdent | emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
              ],
              ai_request: (request, respondWith) => {
                respondWith.string(() =>
                  Promise.reject('See docs to implement AI Assistant')
                )
              },
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  )
}
