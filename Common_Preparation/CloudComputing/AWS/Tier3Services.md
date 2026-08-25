# AWS Tier 3 – AI/ML Services Q&A + Commands (Placement Prep)

Module-wise, sequential. These are the differentiators for AI-focused roles. Q&A first, then CLI commands per module.

---

## Module 1: SageMaker

**Q1. What is Amazon SageMaker?**
A fully managed service covering the entire ML lifecycle — build, train, tune, deploy, and monitor machine learning models at scale, without managing infrastructure.

**Q2. What are the core stages of the SageMaker ML workflow?**
**Prepare data** (Data Wrangler, Processing jobs) → **Build/Train** (notebooks, built-in/custom algorithms, distributed training) → **Tune** (Hyperparameter Optimization) → **Deploy** (real-time/batch endpoints) → **Monitor** (Model Monitor).

**Q3. What is a SageMaker Notebook Instance?**
A managed Jupyter notebook environment pre-configured with ML frameworks (TensorFlow, PyTorch, etc.) for interactive data exploration and model development.

**Q4. What is SageMaker Studio?**
A web-based, fully integrated IDE for ML — combines notebooks, experiment tracking, debugging, pipelines, and deployment in one visual interface.

**Q5. What are SageMaker Built-in Algorithms?**
Pre-implemented, optimized algorithms (e.g., XGBoost, Linear Learner, K-Means, Image Classification) you can use directly without writing training code from scratch.

**Q6. What is a Training Job in SageMaker?**
A managed compute job that runs your training script/algorithm on specified instance types (including GPU instances), reading data from S3 and outputting a trained model artifact back to S3.

**Q7. What are the deployment options in SageMaker?**
**Real-time endpoints** (persistent, low-latency inference), **Batch Transform** (offline inference on large datasets), **Serverless Inference** (auto-scaling, pay-per-use), **Asynchronous Inference** (for large payloads/long processing times).

**Q8. What is Hyperparameter Tuning (HPO) in SageMaker?**
Automated search (e.g., Bayesian optimization) across a defined hyperparameter range to find the model configuration that best optimizes a target metric.

**Q9. What is SageMaker Model Monitor?**
Continuously monitors deployed models for data drift, quality degradation, and bias — alerts you when live prediction data diverges from training data patterns.

**Q10. What is SageMaker Pipelines?**
A CI/CD-style orchestration service for ML workflows — chains together data prep, training, evaluation, and deployment steps into a repeatable, automated pipeline (MLOps).

**Q11. What is SageMaker JumpStart?**
A hub of pre-trained, open-source models and solution templates (including foundation models) you can deploy or fine-tune with minimal setup.

**Q12. Why use SageMaker instead of just training a model on an EC2 GPU instance manually?**
SageMaker handles infrastructure provisioning/teardown, distributed training, built-in experiment tracking, one-click deployment, auto-scaling endpoints, and monitoring — significantly less operational overhead than self-managing everything on raw EC2.

### SageMaker Commands
```bash
aws sagemaker list-notebook-instances                          # list notebook instances
aws sagemaker create-notebook-instance --notebook-instance-name myNotebook --instance-type ml.t3.medium --role-arn arn:aws:iam::xxxx:role/sagemaker-role  # create notebook
aws sagemaker create-training-job --training-job-name myTrainingJob --cli-input-json file://training-config.json  # start a training job
aws sagemaker describe-training-job --training-job-name myTrainingJob  # check training job status
aws sagemaker create-model --model-name myModel --primary-container Image=<ecr-image-uri>,ModelDataUrl=s3://bucket/model.tar.gz --execution-role-arn arn:aws:iam::xxxx:role/sagemaker-role  # register a model
aws sagemaker create-endpoint-config --endpoint-config-name myConfig --production-variants VariantName=v1,ModelName=myModel,InstanceType=ml.m5.large,InitialInstanceCount=1  # create endpoint config
aws sagemaker create-endpoint --endpoint-name myEndpoint --endpoint-config-name myConfig  # deploy real-time endpoint
aws sagemaker-runtime invoke-endpoint --endpoint-name myEndpoint --body fileb://input.json output.json  # invoke endpoint for inference
aws sagemaker delete-endpoint --endpoint-name myEndpoint         # delete endpoint (stop billing!)
```

---

## Module 2: Bedrock

**Q13. What is Amazon Bedrock?**
A fully managed service providing API access to foundation models (FMs) from AWS and third-party providers (Anthropic's Claude, Meta's Llama, Amazon Titan, Mistral, etc.) — no infrastructure or model hosting required.

**Q14. What is a Foundation Model (FM)?**
A large, pre-trained model (typically on massive, diverse datasets) that can be adapted/fine-tuned for many downstream tasks — text generation, summarization, embeddings, image generation, etc.

**Q15. How does Bedrock differ from SageMaker for AI work?**
Bedrock: consume pre-built foundation models via simple API calls (generative AI focus, no training infra). SageMaker: build/train/deploy your own **custom** models end-to-end, more control, more setup.

**Q16. What is Retrieval-Augmented Generation (RAG), and how does Bedrock support it?**
RAG combines an LLM with retrieval from an external knowledge base (so responses are grounded in your own data) — Bedrock offers a managed **Knowledge Bases** feature that handles retrieval + generation together.

**Q17. What are Bedrock Agents?**
A feature that lets a foundation model autonomously plan and execute multi-step tasks by calling APIs/tools (function calling) and reasoning over the results.

**Q18. What is Model Customization in Bedrock?**
Fine-tuning or continued pre-training of a foundation model on your own labeled dataset to specialize it for your domain/use case, while keeping it private to your account.

**Q19. What is Bedrock Guardrails?**
A feature to configure content filtering, topic restrictions, and PII redaction policies to keep foundation model outputs safe and aligned with your application's requirements.

**Q20. How is pricing typically structured for Bedrock?**
Primarily **pay-per-token** (input + output tokens) for on-demand usage; provisioned throughput is also available for guaranteed capacity at a fixed cost.

### Bedrock Commands
```bash
aws bedrock list-foundation-models                              # list available foundation models
aws bedrock-runtime invoke-model --model-id anthropic.claude-3-sonnet-20240229-v1:0 --body fileb://request.json output.json  # invoke a model for inference
aws bedrock create-knowledge-base --name myKB --role-arn arn:aws:iam::xxxx:role/bedrock-role --knowledge-base-configuration file://kb-config.json  # create a knowledge base (RAG)
aws bedrock list-knowledge-bases                                 # list knowledge bases
aws bedrock create-model-customization-job --job-name myFineTune --base-model-identifier <model-id> --role-arn arn:aws:iam::xxxx:role/bedrock-role --training-data-config file://training-data.json --output-data-config file://output.json  # fine-tune a model
aws bedrock create-guardrail --name myGuardrail --blocked-input-messaging "Blocked" --blocked-outputs-messaging "Blocked"  # create a guardrail
```

---

## Module 3: Comprehend

**Q21. What is Amazon Comprehend?**
A natural language processing (NLP) service that extracts insights from text — sentiment, entities, key phrases, language, and syntax — via pre-trained APIs, no ML expertise required.

**Q22. What core NLP tasks does Comprehend support out of the box?**
**Sentiment Analysis** (positive/negative/neutral/mixed), **Entity Recognition** (people, places, organizations), **Key Phrase Extraction**, **Language Detection**, **Syntax Analysis** (part-of-speech tagging), **PII Detection**.

**Q23. What is Comprehend Custom Classification?**
Lets you train a custom text classifier on your own labeled data (e.g., categorize support tickets by department) using Comprehend's AutoML under the hood.

**Q24. What is Comprehend Medical?**
A specialized variant that extracts medical information (conditions, medications, dosages) from unstructured clinical text — HIPAA-eligible.

**Q25. What's a typical real-world use case for Comprehend?**
Analyzing customer reviews/support tickets for sentiment trends, or automatically redacting PII from documents before storage.

### Comprehend Commands
```bash
aws comprehend detect-sentiment --text "I love this product!" --language-code en   # sentiment analysis
aws comprehend detect-entities --text "Amazon is based in Seattle." --language-code en  # entity recognition
aws comprehend detect-key-phrases --text "The quarterly report shows strong growth." --language-code en  # key phrase extraction
aws comprehend detect-dominant-language --text "Bonjour le monde"   # language detection
aws comprehend detect-pii-entities --text "My SSN is 123-45-6789" --language-code en  # PII detection
aws comprehend start-document-classification-job --document-classifier-arn <arn> --input-data-config file://input.json --output-data-config file://output.json --data-access-role-arn arn:aws:iam::xxxx:role/comprehend-role  # batch classification job
```

---

## Module 4: Rekognition

**Q26. What is Amazon Rekognition?**
A computer vision service for analyzing images and videos — object/scene detection, face analysis, text extraction, content moderation — via API, no ML model training needed.

**Q27. What are the core capabilities of Rekognition?**
**Object & Scene Detection**, **Facial Analysis** (age range, emotion, attributes — not identification by default), **Face Comparison/Search** (matching against a collection), **Text Detection (OCR)**, **Content Moderation** (detecting inappropriate content), **Celebrity Recognition**.

**Q28. What is a Face Collection in Rekognition?**
A container of indexed face data used for face search/matching — e.g., comparing a new photo against known faces for identity verification.

**Q29. Rekognition vs Textract — what's the difference?**
Rekognition: general image/video analysis (objects, faces, moderation) with basic text detection. Textract: specialized for extracting **structured data** from documents (forms, tables, key-value pairs), not just raw text.

**Q30. What is Content Moderation in Rekognition used for?**
Automatically flagging images/videos containing unsafe content (violence, nudity, etc.) — commonly used for user-generated content platforms.

**Q31. Does Rekognition support real-time video analysis?**
Yes — via **Rekognition Video**, which can process streaming video (e.g., from Kinesis Video Streams) for real-time face detection/recognition use cases.

### Rekognition Commands
```bash
aws rekognition detect-labels --image '{"S3Object":{"Bucket":"my-bucket","Name":"photo.jpg"}}'  # detect objects/scenes
aws rekognition detect-faces --image '{"S3Object":{"Bucket":"my-bucket","Name":"face.jpg"}}' --attributes ALL  # face analysis
aws rekognition detect-text --image '{"S3Object":{"Bucket":"my-bucket","Name":"sign.jpg"}}'  # text detection (OCR)
aws rekognition detect-moderation-labels --image '{"S3Object":{"Bucket":"my-bucket","Name":"upload.jpg"}}'  # content moderation
aws rekognition create-collection --collection-id myFaces         # create a face collection
aws rekognition index-faces --collection-id myFaces --image '{"S3Object":{"Bucket":"my-bucket","Name":"face.jpg"}}'  # add face to collection
aws rekognition search-faces-by-image --collection-id myFaces --image '{"S3Object":{"Bucket":"my-bucket","Name":"query.jpg"}}'  # search for matching face
```

---

## Module 5: Textract

**Q32. What is Amazon Textract?**
An OCR-based service that automatically extracts **structured data** — text, forms (key-value pairs), and tables — from scanned documents, PDFs, and images.

**Q33. Textract vs basic OCR — what makes it different?**
Basic OCR just extracts raw text. Textract understands document **structure** — it identifies form fields as key-value pairs and preserves table layout/relationships, not just a flat text dump.

**Q34. What are common Textract use cases?**
Automating invoice/receipt processing, extracting data from tax forms or identity documents, digitizing scanned contracts for search/analysis.

**Q35. What is the difference between synchronous and asynchronous Textract operations?**
**Synchronous**: for single-page documents/images, immediate response. **Asynchronous**: for multi-page PDFs, submits a job and you poll/get notified (via SNS) when complete.

**Q36. Does Textract integrate with other AWS AI services?**
Yes — commonly chained with Comprehend (to analyze extracted text for sentiment/entities) or A2I (Amazon Augmented AI, for human review of low-confidence extractions).

### Textract Commands
```bash
aws textract detect-document-text --document '{"S3Object":{"Bucket":"my-bucket","Name":"doc.png"}}'  # basic text extraction
aws textract analyze-document --document '{"S3Object":{"Bucket":"my-bucket","Name":"form.png"}}' --feature-types '["FORMS","TABLES"]'  # extract forms & tables
aws textract start-document-text-detection --document-location '{"S3Object":{"Bucket":"my-bucket","Name":"multipage.pdf"}}'  # async job for multi-page doc
aws textract get-document-text-detection --job-id <job-id>          # get async job result
aws textract start-document-analysis --document-location '{"S3Object":{"Bucket":"my-bucket","Name":"form.pdf"}}' --feature-types '["FORMS"]'  # async form analysis
```

---

## Module 6: Lex

**Q37. What is Amazon Lex?**
A service for building conversational interfaces (chatbots, voice assistants) using the same NLU/ASR technology that powers Amazon Alexa.

**Q38. What is an Intent in Lex?**
Represents an action the user wants to perform (e.g., "BookFlight," "CheckOrderStatus") — the core building block of a Lex bot.

**Q39. What is a Slot in Lex?**
A piece of information required to fulfill an intent (e.g., destination city, date) — Lex prompts the user to provide missing slot values conversationally.

**Q40. What is an Utterance in Lex?**
A sample phrase a user might say to trigger a given intent (e.g., "Book me a flight to Paris") — used to train the bot's understanding.

**Q41. How does Lex typically integrate with the rest of an application?**
The **Fulfillment** step of an intent commonly invokes a **Lambda function** to execute business logic (e.g., actually booking the flight, querying a database) once all required slots are filled.

**Q42. Lex vs Bedrock/foundation models for chatbots — how do they compare?**
Lex: purpose-built for structured, intent/slot-based conversational flows (task completion, defined dialogue). Bedrock (LLMs): more flexible, open-ended natural conversation and generation, but requires more design for reliable task execution/guardrails.

### Lex Commands
```bash
aws lexv2-models list-bots                                        # list Lex bots
aws lexv2-models create-bot --bot-name myBot --role-arn arn:aws:iam::xxxx:role/lex-role --data-privacy '{"childDirected":false}' --idle-session-ttl-in-seconds 300  # create a bot
aws lexv2-models create-intent --bot-id <bot-id> --bot-version DRAFT --locale-id en_US --intent-name BookFlight  # create an intent
aws lexv2-models create-slot --bot-id <bot-id> --bot-version DRAFT --locale-id en_US --intent-id <intent-id> --slot-name Destination --slot-type-id AMAZON.City  # create a slot
aws lexv2-models build-bot-locale --bot-id <bot-id> --bot-version DRAFT --locale-id en_US  # build the bot
aws lexv2-runtime recognize-text --bot-id <bot-id> --bot-alias-id <alias-id> --locale-id en_US --session-id mysession --text "Book me a flight to Paris"  # test the bot
```

---

## Quick Revision Checklist

- [ ] SageMaker: full ML lifecycle stages, deployment options (real-time/batch/serverless/async)
- [ ] Bedrock: foundation models, RAG/Knowledge Bases, Agents, Guardrails
- [ ] SageMaker vs Bedrock — build/train custom vs consume pre-built FMs
- [ ] Comprehend: sentiment, entities, key phrases, custom classification
- [ ] Rekognition: labels, face analysis, moderation, face collections
- [ ] Rekognition vs Textract — general vision vs structured document extraction
- [ ] Textract: sync vs async, forms/tables vs plain OCR
- [ ] Lex: Intent, Slot, Utterance, Fulfillment via Lambda
- [ ] Lex vs LLM-based chatbots (Bedrock) — structured vs open-ended

---

*You've now covered Tier 1 (core infra), Tier 2 (strongly recommended), and Tier 3 (AI/ML) — a complete, interview-ready AWS foundation for AI/tech placements.*